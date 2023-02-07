import {actionType} from "../constant/actionType";
export const setProducts=(products)=>{
    return {
        type:actionType.SET_PRODUCTS,
        payload:products
    };
}
export const selectedProduct=(products)=>{
    return {
        type:actionType.SELECTED_PRODUCT,
        payload:products
    };
}
// export const =(products)=>{
//     return {
//         type:actionType.REMOVE_SELECTED_PRODUCT,
//         payload:products
//     };
// }