import { ADD_TO_BASKET } from "./basketTypes";

export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

    export const basketReducer = (state = initialState, action) => {
        if(action.payload !== undefined) {
            state.basket.push(action.payload)
        }
        
        switch(action.type) {
            case ADD_TO_BASKET:
                return {
                    ...state,
                    basket: [...state.basket],
                    
                }
            default: return state
        }
    }
    