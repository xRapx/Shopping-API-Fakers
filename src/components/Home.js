import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from '../Product/SingleProduct';
import "../css/style.css"
import Filters from './Filters';

const Home = () => {

   const {
    state: {products},
    }
     = CartState();
   
  return (
    <div className='home'>
      <Filters />
        <div className='productContainer'>
            {products.map((prod) =>{
                return <SingleProduct prod={prod} key={prod.id}/>            
            })};
        </div>
    </div>
  )
}

export default Home