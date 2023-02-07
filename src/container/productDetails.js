import React,{useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/action/product';
import { useParams } from 'react-router-dom';
function ProductDetails(){
    const product=useSelector((state)=>state.product)
    const dispatch=useDispatch();
    const {productId}=useParams();
    console.log(productId);
    const fetchDetail=async()=>{
        const res=await axios.get(`https://fakestoreapi.com/products/${productId}`);
        console.log(res.data);
        dispatch(selectedProduct(res.data));
    }
    useEffect(()=>{
        if(productId&&productId!==""){fetchDetail();}
    },[productId]);
    const {id,title,image,price,category}=product;
    return (
        <div key={id}>
            <div className='ui cards center'>
                    <div className='card'>
                        <div className='image'>
                            <img src={image} alt={title}/>
                        </div>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta price'>{price}</div>
                            <div className='meta'>{category}</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default ProductDetails;