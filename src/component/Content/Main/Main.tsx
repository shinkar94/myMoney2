import React from 'react';
import styled from 'styled-components';
import {ItemType} from '../../../App';


type HomePageType = {
    totalOutcome: number
    expenses: ItemType[]
}


export const HomePage: React.FC<HomePageType> = ({totalOutcome, expenses}) => {

    const expenseAnalytics: ItemType[] = expenses.reduce((acc: ItemType[], { category, value, ...rest }) => {
        const categoryIndex = acc.findIndex(item => item.category === category);
        if (categoryIndex !== -1) {
            acc[categoryIndex].value += value;
        } else {
            acc.push({ category, value, ...rest });
        }
        return acc;
    }, []);

    const expensePercentages = expenseAnalytics.map(expense => ({
        category: expense.category,
        percentage: (expense.value / totalOutcome) * 100,
    }));

    const analytics = expensePercentages.map((expense, index) => {

        const styleAnalytics = {
            height: '14px',
            backgroundColor: '#6476ed',
            width: `${expense.percentage}%`,
            borderRadius: '7px'
        }
        return (
            <div key={expense.category} >
                <span>{expense.category}: </span>
                <span>{expense.percentage.toFixed(2)}%</span>
                <div style={styleAnalytics}></div>
            </div>
        )
    })

    return (
        <HomePageWrapper>
            <div className="topContainer">
                <div className="block graf">asdfsadf</div>
                <div className="block analitic">
                    <h3>Аналитика расходов</h3>
                    {analytics}
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

