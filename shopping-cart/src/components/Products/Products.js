import React from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/cartContants';
import './product.css';

const Products = ({state,dispatch}) => {
const {products,cart}= state;
  return (
   
    <div className='main__container'>
      {products.map((product)=>(
       
        
        <div className='product' key={product.id}>
          <img className='product__img' src={product.thumbnail} alt={product.title} />
        <div className='product__details'>
        <span>{product.title}</span>
        <b>$ {product.price}</b>
        </div>
        {cart.some(p=>p.id===product.id)?
       <button className='btn__remove'onClick={()=>dispatch({
        type:REMOVE_FROM_CART,
        payload:product,
         
       })}>Remove from Cart</button>:


       <button className='btn__add' onClick={()=>dispatch({
        type:ADD_TO_CART,
        payload:{
          id:product.id,
          title:product.title,
          thumbnail:product.thumbnail,
          qty:1,
          price:product.price,
        }
       })}>Add to Cart</button>
      }
        
       
         
        </div>
      ))}
    </div>
  )
}

export default Products