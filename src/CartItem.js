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
    //  Function To increase quantity by clicking on + icon
    increaseQuantity = () => {
    //    console.log(this.state.qty);
    // set State form 1
    // It is used to display the increase quantity or re-render or to change the state
    // Here object is passing in the setState Function 
    // this.setState({
    //     qty:this.state.qty+= 1
    // });

    // OR By using callback Function inside a setState Method
    // if previous state requires use this
    this.setState((prevState)=>{
        return{
            qty: this.state.qty + 1
        } 
    });
    }

    //  Function To decrease quantity by clicking on - icon
        decreaseQuantity=() => {
            if(this.state.qty<=0){
                return;
            }
            this.setState({
                qty:this.state.qty - 1
            });
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
                        <img alt='decrease' className='action-icons' src='https://www.flaticon.com/svg/static/icons/svg/929/929430.svg' onClick={this.decreaseQuantity}></img>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3221/3221897.svg" alt="delete" className='action-icons'/>
                        

                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    image:{
    height:100,
    width:100,
    borderRadius:20,
    backgroundColor:'red'

    }
}
export default CartItem;