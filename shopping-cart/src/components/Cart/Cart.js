import React, { useEffect, useState } from 'react'
import { CHANGE_CART_QTY } from '../../constants/cartContants';
import './index.css';
const Cart = ({state,dispatch}) => {
  const {cart} = state;
  const [total, setTotal] = useState(0)
  const changeQty=(id,qty)=>{
    dispatch({
      type:CHANGE_CART_QTY,
      payload:{id,qty}
      
    })
  }
  useEffect(() => {
   setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  }, [cart])
  
  return (
    <div className='main__cart'>
      <b className='cart__heading'>Cart</b>
      <b className='subtotal'>Subtotal: $ {total}</b>
      {
        cart.length>0?
        cart.map((item)=>(
          <div className='cart' key={item.title}>
            <div className='cart__product'>
            <img className='cart__img' src={item.thumbnail} alt={item.title} />
        <div className='cart__details'>
        <span>{item.title}</span>
        <b>$ {item.price}</b>
        </div>
            </div>
            <div className='cart__qty'>
              <button onClick={()=>changeQty(item.id,item.qty-1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={()=>changeQty(item.id,item.qty+1)}>+</button>
            </div>
          </div>
        ))
        :<span className='cart__empty'>Cart is empty</span>
      }
    </div>
  )
}

export default Cart