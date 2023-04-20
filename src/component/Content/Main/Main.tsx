import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {ItemType} from '../../../App';
import Chart from 'chart.js/auto';


type HomePageType = {
    totalOutcome: number
    expenses: ItemType[]
}

export const HomePage: React.FC<HomePageType> = ({totalOutcome, expenses}) => {

    // const expenseAnalytics: ItemType[] = expenses.reduce((acc: ItemType[], { category, value, ...rest }) => {
    //     const categoryIndex = acc.findIndex(item => item.category === category);
    //     if (categoryIndex !== -1) {
    //         acc[categoryIndex].value += value;
    //     } else {
    //         acc.push({ category, value, ...rest });
    //     }
    //     return acc;
    // }, []);
    //
    // const expensePercentages = expenseAnalytics.map(expense => ({
    //     category: expense.category,
    //     percentage: (expense.value / totalOutcome) * 100,
    // }));
    //
    // const analytics = expensePercentages.map((expense, index) => {
    //
    //     const styleAnalytics = {
    //         height: '14px',
    //         backgroundColor: '#6476ed',
    //         width: `${expense.percentage}%`,
    //         borderRadius: '7px'
    //     }
    //     return (
    //         <div key={expense.category} >
    //             <span>{expense.category}: </span>
    //             <span>{expense.percentage.toFixed(2)}%</span>
    //             <div style={styleAnalytics}></div>
    //         </div>
    //     )
    // })

    const expenseAnalytics: ItemType[] = expenses
        .reduce((acc: ItemType[], {category, value, ...rest}) => {
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
                <div className="block graf">asdfsadf</div>
                <div className="block analitic">
                    <h3>Аналитика расходов</h3>
                    {/*{analytics}*/}
                    <div>
                        <canvas ref={chartRef}/>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <div className="table">
                    <div className="head">
                        <div className="th">date</div>
                        <div className="th">name</div>
                        <div className="th">sum</div>
                        <div className="th">type</div>
                        <div className="th">category</div>
                    </div>
                    <div className="tbody">
                        <div className="tr" style={{display: 'flex', gap: '10px'}}>
                            <p>date</p>
                            <p>name</p>
                            <p>sum</p>
                            <p>type</p>
                            <p>category</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomePageWrapper>
    );
};

const HomePageWrapper = styled.div`
  .topContainer {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    justify-content: space-around;
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
    padding: 10px;
    color: white;

    .table {
      background: #222131;
      box-shadow: 0 0 10px black;
      padding: 4px;
      border-radius: 4px;

      .head {
        display: flex;
        border: 1px solid white;

        .th {
          width: 20%;
          border: 1px solid white;
          text-align: center;
        }
      }

      .tbody {
        .tr {
          border: 1px solid white;

          & p {
            border: 1px solid white;
          }
        }
      }
    }
  }
`

