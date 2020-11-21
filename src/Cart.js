import React from 'react';
import CartItem from './CartItem'

const Cart=(props)=>{
const{product} =props;
return(
<div className='cartItem'>
{
    product.map(
        (i)=>{
            return(
                <CartItem
                    product={i} 
                    key={i.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity} 
                    onDeleteProduct={props.onDeleteProduct}
                />

            )
        }
    )
}
</div>

       
        
    );
}

export default Cart;