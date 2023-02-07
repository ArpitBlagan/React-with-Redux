import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import{setProducts} from '../redux/action/product'
//To extract the data from the redux-store
import ProductComponent from './productComponent';
function ProductList(){
    const dispatch=useDispatch();
    const fetchData=async()=>{
        const res=await axios.
        get('https://fakestoreapi.com/products').catch((err)=>{console.log(err)});
        dispatch(setProducts(res.data));
        console.log(res.data);
    };
    useEffect(()=>{
        fetchData();
    },[]);
    
    return (
        <div className='ui four column grid container'>
            <ProductComponent/>
        </div>
    );
}
export default ProductList;