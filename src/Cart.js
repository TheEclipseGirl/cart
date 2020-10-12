import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component{
render(){
    return(
        <div className='cartItem'>
            < CartItem />
            < CartItem />
            < CartItem />
            < CartItem />
        </div>
       
        
    );
}
}
export default Cart;