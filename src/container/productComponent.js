import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function ProductComponent(){
    const products=useSelector((state)=>state.allProducts.products);
    return (
        <>{products?products.map((ele)=>{
            const{id,title,image,price,category}=ele;
            return (
                <div className='four column' key={id}>
                    <Link to={`/product/${id}`}>
                    <div className='ui cards'>
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
                    </div></Link>
                </div>
            );
        }):null}</>
    );
}
export default ProductComponent;