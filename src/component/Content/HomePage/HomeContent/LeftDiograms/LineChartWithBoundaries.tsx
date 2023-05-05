import React, {useRef, useEffect} from "react";
import {Chart, ChartOptions, LineControllerDatasetOptions, registerables} from 'chart.js';
import {useAppSelector} from "../../../../../Hok/useAppSelector";

// Регистрируем необходимые модули
Chart.register(...registerables);

// Определяем типы данных для графика
type DataType = {
    labels: string[],
    values: number[]
}

export const LineChartWithBoundaries = () => {
    const chartRef = useRef<HTMLCanvasElement>(null); // Используем useRef с типом элемента
    const state = useAppSelector(state => state.allState)
    const stateOutcome = state.filter(el => el.type === 'outcome')
    // let arr: Array<number[]> = [[], [], [], [], [], [], [], [], [], [], [], []]
    // // console.log(arr[0])
    // for (let i = 0; i < stateOutcome.length; i++) {
    //     let month = stateOutcome[i].date.split("-")[1]
    //     switch (month) {
    //         case '01': {
    //             arr[0].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '02': {
    //             arr[1].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '03': {
    //             arr[2].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '04': {
    //             arr[3].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '05': {
    //             arr[4].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '06': {
    //             arr[5].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '07': {
    //             arr[6].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '08': {
    //             arr[7].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '09': {
    //             arr[8].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '10': {
    //             arr[9].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '11': {
    //             arr[10].push(stateOutcome[i].value)
    //             break
    //         }
    //         case '12': {
    //             arr[11].push(stateOutcome[i].value)
    //             break
    //         }
    //     }
    // }
    // let arr2 = []
    // for (let i = 0; i < arr.length; i++) {
    //     arr2.push(arr[i].reduce((acc, el) => acc + el, 0))
    // }


    const arr: Array<number[]> = Array.from({length: 12}, () => []);
    stateOutcome.forEach(({date, value}) => {
        const month = Number(date.split("-")[1]) - 1;
        console.log(month)
        arr[month].push(value);
    });
    const arr2 = arr.map(subarr => subarr.reduce((acc, el) => acc + el, 0));


    const data: DataType = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        values: arr2
    }

    console.log(arr)
    // const filteredApril = state.filter(operation =>
    //     operation.date.includes("04")).reduce((acc,el)=> acc + el.value, 0)

    useEffect(() => {
        // Проверяем, что элемент canvas существует
        if (chartRef && chartRef.current) {


            const gradient = (context: CanvasRenderingContext2D | null) => {
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
                            backgroundColor: gradient(context),
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


            // Получаем контекст для рисования на холсте
            const chartCanvas = chartRef.current.getContext("2d");
            if (!chartCanvas) return;

            // Создаем новый график
            const chart = new Chart(chartCanvas, config);

            return () => chart.destroy(); // Уничтожаем график при размонтировании компонента
        }
    }, [data]);

    return <canvas ref={chartRef}/>; // Используем типизированный ref для элемента canvas
};