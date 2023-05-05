import {v1} from "uuid";

type CardsReducerType = {
    name: string
    idCard: string
    idUser: string
    type:string
    currency: string
    nameCard: string
    numberCard: string
    dateActive: string
    sumCard: number
    user:UserType
}
type UserType = {
    name: string
    lastName: string
}

const initialState = [
    {name: 'wallet',idCard: v1(),idUser: v1(),type:'card',currency: 'BYN',nameCard: 'MasterCard', numberCard: '2345-****-****-7888', dateActive: '08/23', sumCard: 1400, user:{name: 'Egor', lastName: 'Belozerov'}},
    {name: 'wallet',idCard: v1(),idUser: v1(),type:'cash',currency: 'USD',nameCard: 'MasterCard', numberCard: '2345-****-****-7888', dateActive: '08/23', sumCard: 1400, user:{name: 'Egor', lastName: 'Belozerov'}},
    {name: 'wallet',idCard: v1(),idUser: v1(),type:'bank',currency: 'RUB',nameCard: 'MasterCard', numberCard: '2345-****-****-7888', dateActive: '08/23', sumCard: 1400, user:{name: 'Egor', lastName: 'Belozerov'}}
]

export const cardsReducer = (state:CardsReducerType[] = initialState, action:any)=>{
    switch (action.type) {
        case 'SSS':{
            return state
        }
        default: return state
    }
}

