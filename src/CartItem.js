import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:9000,
            title:'Dog',
            qty:1
        }
    // either use this bind function or use example below using arrow function to automatically bind this
    //     this.increaseQuantity=this.increaseQuantity.bind(this);
     }
    increaseQuantity = () => {
       console.log(this.state.qty +=1);
    }
    render(){
        const {price,title,qty}=this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:'xx-large'}}>{this.state.title}</div>
                    <div style={{color:'red'}}>{price}</div>
                    <div style={{fontSize:'xx-small'}}>Qty:{qty}</div>
                    <div className= 'cart-item-actions'> 
                        {/* Buttons */}
                        <img alt='increase' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/753/753317.svg' onClick={this.increaseQuantity} ></img>
                        <img alt='decrease' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/929/929430.svg'></img>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3221/3221897.svg" alt="delete" className='action-icons'/>
                        

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