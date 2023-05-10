import React from 'react';
import {useAppSelector} from "../../../../../Hok/useAppSelector";
import styled from "styled-components";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from './AcountWidget.module.css'
import cardVisa from '../../../../../img/Card_Visa.svg'
import cardMaster from '../../../../../img/Card_Mastercard.svg'
import AmExpress  from '../../../../../img/American_Express.svg'



export const AccountWidget = () => {
    const wallets = useAppSelector(state=> state.wallets)



    const mappedWallets = wallets.map(el=> {
        const userName = `${el.user.name + " " + el.user.lastName}`
        return (
            <CardsWrapper key={el.idCard} >
                <Card>
                    <div className="title">{el.name}</div>
                    <div className="card-number">
                        <span>{el.numberCard}</span>
                    </div>
                    <div className="tutorial">
                        <p className="titleName">TUTORIAL</p>
                        <p className="userName">{userName.toUpperCase()}</p>
                    </div>
                    <div className="bootomCard">
                        <div className="date"><p>VANCE EL</p><p>03/23</p></div>
                        <div className="cvv"><p>CVV</p><p>***</p></div>
                        <div className="logoCard">
                            {
                                el.nameCard === 'MasterCard'
                                    ? <img src={cardMaster}  alt={'imgCard'}/>
                                    : el.nameCard === 'Visa'
                                        ? <img src={cardVisa}  alt={'imgCard'}/>
                                        : <img src ={AmExpress} alt={'imgCard'}/>
                            }
                        </div>
                    </div>
                </Card>
            </CardsWrapper>
        )
            })

    return (
        <AccountWidgetWrapper>
            <AwesomeSlider cssModule={styles}>
                {React.Children.toArray(mappedWallets)}
            </AwesomeSlider>

        </AccountWidgetWrapper>
    );
};

const AccountWidgetWrapper = styled.div`
  width: 35%;
  background: #39394B;
  height: 350px;
  border-radius: 10px;
  color: white;
  padding: 4px;
  min-width: 300px;
  position: relative;
`
const CardsWrapper = styled.div`
  
`

const Card = styled.div`
    width: 350px;
    height: 200px;
    background: linear-gradient(to right, #1c1c1c 0%, #3a3a3a 100%);
    color: white;
    border-radius: 20px;
    padding: 20px;
    .title{
      font-size: 18px;
    }
    .card-number{
      font-size: 38px;
      text-align: center;
      margin-top: 30px;
      text-shadow: 0 2px  rgb(112, 112, 112);
    }
    .tutorial {
      .titleName{
        font-size: 12px;
        margin: 10px 0 0 0;
      }
      .userName{
        margin: 0;
      }
    }
    .bootomCard{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .date p, .cvv p{
        margin: 0;
      }
      .date{
        text-align: center;
      }
      .cvv{
        text-align: center;
      }
    }
    & img{
      width: 60px;
    }
`
