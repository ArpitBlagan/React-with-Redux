import {actionType} from "../constant/actionType";
const initialState={
    products:[],
}
//action={type,payload}
export const productReducer=(state=[],{type,payload})=>{
    switch(type){
        case actionType.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}
export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case actionType.SELECTED_PRODUCT:
            return {...state,...payload};
        default:
            return state
    }
}