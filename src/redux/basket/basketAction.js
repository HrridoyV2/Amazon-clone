import { ADD_TO_BASKET } from "./basketTypes"

export const addToBasket = (data) => {
    return {
        type: ADD_TO_BASKET,
        payload: data
    }
}