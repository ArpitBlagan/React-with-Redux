import {combineReducers} from "redux";
import { selectedProduct } from "../action/product";
import {productReducer, selectedProductReducer} from "./productReducer";

const rootreducer=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
});
export default rootreducer;