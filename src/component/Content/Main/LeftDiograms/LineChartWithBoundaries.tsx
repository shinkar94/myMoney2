import React, { useRef, useEffect } from "react";
import {Chart, ChartOptions, LineControllerDatasetOptions, registerables} from 'chart.js';

// Регистрируем необходимые модули
Chart.register(...registerables);

// Определяем типы данных для графика
type DataType = {
    labels: string[],
    values: number[]
}

export const LineChartWithBoundaries = () => {
    const chartRef = useRef<HTMLCanvasElement>(null); // Используем useRef с типом элемента

    const data:DataType = {
        labels: ["January","February","March","April","May","June","July","August","September","October", "November","December"],
        values: [100, 200, 150, 300, 25, 40, 235, 300, 220, 340, 321, 400]
    }
    const gradient = (context:CanvasRenderingContext2D | null) => {
        if (!context) return null;
        const gradient = context.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(125,73,112,0.6)');
        gradient.addColorStop(1, 'rgba(61,56,146, 0.3)');
        return gradient;
    }

    const context: CanvasRenderingContext2D | null | undefined = chartRef.current?.getContext('2d');
    // if (!context) return null; // если значение context равно undefined, вернуть null

    // @ts-ignore
    const config: ChartOptions<"line", LineControllerDatasetOptions[], string> = {
        type: "line",
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: "outcome",
                    data: data.values,
                    borderColor: "blue",
                    fill: "start",
                    borderWidth: 0.2,
                    pointBackgroundColor: "rgb(125,73,112)",
                    backgroundColor: "rgb(125,73,112)",
                    cubicInterpolationMode: 'monotone',
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        type: "time",
                        time: {
                            unit: "day",
                        },
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                        },
                    }
                ]
            },
        },
    }

    useEffect(() => {
        // Проверяем, что элемент canvas существует
        if (!chartRef.current) return;

        // Получаем контекст для рисования на холсте
        const chartCanvas = chartRef.current.getContext("2d");
        if (!chartCanvas) return;

        // Создаем новый график
        const chart = new Chart(chartCanvas, config);

        return () => chart.destroy(); // Уничтожаем график при размонтировании компонента
    }, [data]);

    return <canvas ref={chartRef} />; // Используем типизированный ref для элемента canvas
};