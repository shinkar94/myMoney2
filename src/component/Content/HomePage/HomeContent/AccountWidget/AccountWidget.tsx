import React from 'react';
import {useAppSelector} from "../../../../../Hok/useAppSelector";
import styled from "styled-components";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from './AcountWidget.module.css'



export const AccountWidget = () => {
    const wallets = useAppSelector(state=> state.wallets)



    const mappedWallets = wallets.map(el=> {
        return (
            <CardsWrapper key={el.idCard} >
                {/*<div>{el.name}</div>*/}
                {/*<div>*/}
                {/*    <div>{el.type}</div>*/}
                {/*    <div>{el.nameCard}</div>*/}
                {/*    <div>{el.numberCard}</div>*/}
                {/*    <div>*/}
                {/*        <span>{el.sumCard}</span>*/}
                {/*        <span>{el.currency}</span>*/}

                {/*    </div>*/}

                {/*</div>*/}
                <div className="container">
                    <div className="card">
                        <div className="header">
                            <h3 className="title">{el.name}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="logo" width="140" height="43"
                                 viewBox="0 0 175.7 53.9">

                                <path className="visa"
                                      d="M61.9 53.1l8.9-52.2h14.2l-8.9 52.2zm65.8-50.9c-2.8-1.1-7.2-2.2-12.7-2.2-14.1 0-24 7.1-24 17.2-.1 7.5 7.1 11.7 12.5 14.2 5.5 2.6 7.4 4.2 7.4 6.5 0 3.5-4.4 5.1-8.5 5.1-5.7 0-8.7-.8-13.4-2.7l-2-.9-2 11.7c3.3 1.5 9.5 2.7 15.9 2.8 15 0 24.7-7 24.8-17.8.1-5.9-3.7-10.5-11.9-14.2-5-2.4-8-4-8-6.5 0-2.2 2.6-4.5 8.1-4.5 4.7-.1 8 .9 10.6 2l1.3.6 1.9-11.3M164.2 1h-11c-3.4 0-6 .9-7.5 4.3l-21.1 47.8h14.9s2.4-6.4 3-7.8h18.2c.4 1.8 1.7 7.8 1.7 7.8h13.2l-11.4-52.1m-17.5 33.6c1.2-3 5.7-14.6 5.7-14.6-.1.1 1.2-3 1.9-5l1 4.5s2.7 12.5 3.3 15.1h-11.9zm-96.7-33.7l-14 35.6-1.5-7.2c-2.5-8.3-10.6-17.4-19.6-21.9l12.7 45.7h15.1l22.4-52.2h-15.1"/>
                                <path fill="#F7A600"
                                      d="M23.1.9h-22.9l-.2 1.1c17.9 4.3 29.7 14.8 34.6 27.3l-5-24c-.9-3.3-3.4-4.3-6.5-4.4"/>
                            </svg>

                        </div>

                        <div className="content">
                            <div className="row">
                                <label>Card Number</label>
                                <span>{el.numberCard}</span>
                            </div>

                            <div className="row card-expire">
                                <div className="row card-expire-month">
                                    <label>Month</label>
                                    <input type="text" placeholder="April"/>
                                </div>
                                <div className="row card-expire-year">
                                    <label>Year</label>
                                    <input type="text" placeholder="2022"/>
                                </div>
                            </div>

                            <div className="row card-cvv">
                                <label>CVV</label>
                                <input type="text" placeholder="248"/>
                            </div>

                        </div>

                    </div>
                </div>

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
           .container{
               margin: 0 auto;
               max-width: 34rem;
               width: 90%;
             input{
               background-color: transparent;
               border: none;
               color: #fff;
               font: inherit;
               width: auto;
             }

             input::placeholder{
               color: #fff;
             }

             label{
               display: block;
             }
             .logo{
               float: right;
             }
             
             .card-number{
               font-size: 32px;
             }
             .card{
               background-color: #171a1c;
               border-radius: 14px;
               color: #bebebe;
               padding: 32px;
               .header{
                 margin-bottom: 7rem;
                 .title{
                   color: #fff;
                   float: left;
                   font-size: 1.5rem;
                 }
               }
               .content{
                 margin-bottom: 5rem;
                 .row{
                   margin-bottom: 1.5rem;
                 }
                 .card-expire{
                   float: left;
                   & input{
                     font-size: 0.9rem;
                   }
                   .card-expire-month, .card-expire-year{
                     float: left;
                   }
                   .card-expire-month{
                     width: 22%;
                   }
                 }
                 .card-cvv{
                   float: right;
                   & input{
                     width: 2rem;
                     text-align: center;
                     font-size: 0.9rem;
                   }
                 }
               }
             }
           }

         

           

           

           

          

           
          

          
`

//     <div class="container">
//     <div class="card">
//     <div class="header">
//     <h3 class="title">{el.name}</h3>
//           <svg xmlns="http://www.w3.org/2000/svg" class="logo" width="140" height="43" viewBox="0 0 175.7 53.9">
//
//     <path class="visa"
//           d="M61.9 53.1l8.9-52.2h14.2l-8.9 52.2zm65.8-50.9c-2.8-1.1-7.2-2.2-12.7-2.2-14.1 0-24 7.1-24 17.2-.1 7.5 7.1 11.7 12.5 14.2 5.5 2.6 7.4 4.2 7.4 6.5 0 3.5-4.4 5.1-8.5 5.1-5.7 0-8.7-.8-13.4-2.7l-2-.9-2 11.7c3.3 1.5 9.5 2.7 15.9 2.8 15 0 24.7-7 24.8-17.8.1-5.9-3.7-10.5-11.9-14.2-5-2.4-8-4-8-6.5 0-2.2 2.6-4.5 8.1-4.5 4.7-.1 8 .9 10.6 2l1.3.6 1.9-11.3M164.2 1h-11c-3.4 0-6 .9-7.5 4.3l-21.1 47.8h14.9s2.4-6.4 3-7.8h18.2c.4 1.8 1.7 7.8 1.7 7.8h13.2l-11.4-52.1m-17.5 33.6c1.2-3 5.7-14.6 5.7-14.6-.1.1 1.2-3 1.9-5l1 4.5s2.7 12.5 3.3 15.1h-11.9zm-96.7-33.7l-14 35.6-1.5-7.2c-2.5-8.3-10.6-17.4-19.6-21.9l12.7 45.7h15.1l22.4-52.2h-15.1" />
//     <path fill="#F7A600"
//           d="M23.1.9h-22.9l-.2 1.1c17.9 4.3 29.7 14.8 34.6 27.3l-5-24c-.9-3.3-3.4-4.3-6.5-4.4" />
// </svg>
//
// </div>
//
// <div class="content">
//     <div class="row">
//         <label>Card Number</label>
//         <span>{el.numberCard}</span>
//     </div>
//
//     <div class="row card-expire">
//         <div class="row card-expire-month">
//             <label>Month</label>
//             <input type="text" placeholder="April">
//         </div>
//         <div class="row card-expire-year">
//             <label>Year</label>
//             <input type="text" placeholder="2022">
//         </div>
//     </div>
//
//     <div class="row card-cvv">
//         <label>CVV</label>
//         <input type="text" placeholder="248">
//     </div>
//
// </div>

// </div>
// </div>



//
// .container{
//     margin: 0 auto;
//     max-width: 34rem;
//     width: 90%;
// }
//
// input{
//     background-color: transparent;
//     border: none;
//     color: #fff;
//     font: inherit;
//     width: auto;
// }
//
// input::placeholder{
//     color: #fff;
// }
//
// label{
//     display: block;
// }
//
// .card{
//     background-color: #171a1c;
//     border-radius: 14px;
//     color: #bebebe;
//     padding: 32px;
// }
//
// .header{
//     margin-bottom: 7rem;
// }
//
// .title{
//     color: #fff;
//     float: left;
//     font-size: 1.5rem;
// }
//
// .logo{
//     float: right;
// }
//
// .row{
//     margin-bottom: 1.5rem;
// }
//
// .content{
//     margin-bottom: 5rem;
// }
//
// .content input{
//     outline: none;
// }
//
// .card-number{
//     font-size: 32px;
// }
//
// .card-expire{
//     float: left;
// }
//
// .card-expire input{
//     font-size: 0.9rem;
// }
//
// .card-expire-month{
//     width: 22%;
// }
//
// .card-expire-month, .card-expire-year{
//     float: left;
// }
//
// .card-cvv{
//     float: right;
// }
//
// .card-cvv input{
//     width: 2rem;
//     text-align: center;
//     font-size: 0.9rem;
// }
