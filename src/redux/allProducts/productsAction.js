import axios from "axios"
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productsTypes"

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios
        .get('https://limitless-hamlet-24521.herokuapp.com/products')
        .then(response => {
            const products = response.data
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchProductsFailure(errorMessage))
        })
    }
}

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}
