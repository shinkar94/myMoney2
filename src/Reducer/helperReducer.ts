
export type HelperType = {
    onBlur: boolean
}

const initialState: HelperType = {
    onBlur: false
}

export const helperReducer = (state = initialState, action: ActionType):HelperType => {
    switch (action.type) {
        case 'ONBLUR': {
            return {...state, onBlur: action.payload.onBlur}
        }
        default: return state
    }
}

type ActionType = OnBlurACType


type OnBlurACType = ReturnType<typeof onBlurAC>

export const onBlurAC = (onBlur: boolean)=> {
    return{
        type: "ONBLUR",
        payload: {
            onBlur
        }
    }as const
}