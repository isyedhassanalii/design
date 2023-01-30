import './App.css';
import axios from "axios";
import { useEffect, useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';
import { ADD_PRODUCTS } from './constants/cartContants';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';


function App() {
  const [state, dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[]
  })
  const fetChProducts=async()=>{
    const {data}= await axios.get('https://dummyjson.com/products');
    dispatch({
      type:ADD_PRODUCTS,
      payload:data.products,
    })
  }
  console.log(state);
  useEffect(() => {
    fetChProducts();
  }, [])
  
  return (
    <div className="main__content">
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>

    </div>
  );
}

export default App;
