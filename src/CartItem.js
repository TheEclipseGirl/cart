import React from 'react';
class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:'xx-large'}}>Phone</div>
                    <div style={{color:'red'}}>Rs 900</div>
                    <div style={{fontSize:'xx-small'}}>Quantity: 1</div>
                    <div cart-item-actions> 
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    image:{
    height:200,
    width:200,
    borderRadius:50,
    backgroundColor:'black'

    }
}
export default CartItem;