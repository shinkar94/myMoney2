import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import Chart from 'chart.js/auto';
import {OperationsType} from "../../../Reducer/allStateReducer";
import { LineChartWithBoundaries} from "./LeftDiograms/LineChartWithBoundaries";
import {TableOperations} from "./TableOperations/TableOperations";


type HomePageType = {
    totalOutcome: number
    state: OperationsType[]
}

export const HomePage: React.FC<HomePageType> = ({totalOutcome, state}) => {
    const expenseAnalytics: OperationsType[] = state.filter(item => item.type === "outcome")
        .reduce((acc: OperationsType[], {category, value, ...rest}) => {
            const categoryIndex = acc.findIndex(
                (item) => item.category === category
            );
            if (categoryIndex !== -1) {
                acc[categoryIndex].value += value;
            } else {
                acc.push({category, value, ...rest});
            }
            return acc;
        }, []);
    const expensePercentages = expenseAnalytics.map((expense) => ({
        category: expense.category,
        percentage: ((expense.value / totalOutcome) * 100).toFixed(2),
    }));
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        console.log(chartRef.current)
        /*Это условие проверяет, существует ли объект chartRef и имеет ли он значение current. Это гарантирует,
        что диаграмма создается только в том случае, если доступен элемент DOM, в который она будет отображаться.*/
        if (chartRef && chartRef.current) {

            /*Эта строка создает новый экземпляр библиотеки Chart.js и передает ссылку на DOM-элемент,
            куда будет отрисована диаграмма.*/
            const chart = new Chart(chartRef.current, {

                /*type устанавливает тип диаграммы для отображения в виде doughnut chart.*/
                type: 'doughnut',

                /*Это задает данные, которые будут использоваться для рендеринга диаграммы.*/
                data: {

                    /*labels устанавливает метки для каждого сегмента doughnut chart. Метки получены из массива
                    expensePercentages, который является массивом объектов, содержащих информацию о каждой категории
                    расходов.*/
                    labels: expensePercentages.map((expense) => expense.category),

                    /*datasets задает массив данных, которые будут использоваться для рендеринга диаграммы.*/
                    datasets: [

                        /*Это задает данные для расходов в процентах от общей суммы. Опция label устанавливает метку
                        для набора данных. Опция data устанавливает значения для каждого сегмента doughnut chart.
                        Опция backgroundColor устанавливает цвет фона для каждого сегмента.*/
                        {
                            label: 'Expenses(%)',
                            data: expensePercentages.map((expense) => expense.percentage),
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#8E5EA2',
                                '#3cba9f',
                                '#e8c3b9',
                                '#c45850',
                                '#FF8C00',
                                '#FFD700',
                                '#7CFC00',
                            ],
                        },
                    ],
                },
            });

            /*Эта функция возвращается из useEffect hook и вызывается при размонтировании компонента. Она уничтожает
            экземпляр диаграммы, созданный ранее.*/
            return () => {
                chart.destroy();
            };
        }
    }, [expensePercentages]);



    return (
        <HomePageWrapper>
            <div className="topContainer">
                <div className="block graf">
                    <LineChartWithBoundaries />
                </div>
                <div className="block analitic" style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h3>Аналитика расходов</h3>
                    {/*{analytics}*/}
                    <div style={{height: "400px"}}>
                        <canvas ref={chartRef}/>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <TableOperations />
            </div>
        </HomePageWrapper>
    );
};

const HomePageWrapper = styled.div`
  padding: 20px 10px 20px 10px;
  .topContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    .block {
      background: #39394B;
      height: 400px;
      border-radius: 10px;
      color: white;
      padding: 4px;
      min-width: 300px;
    }

    .graf {
      width: 55%;
    }

    .analitic {
      width: 35%;
      overflow-y: auto;

      & h3 {
        text-align: center;
      }
    }
  }

  .bottomContainer {
    padding: 10px 0;
    color: white;
    height: 400px;
    overflow: auto;
  }
`

