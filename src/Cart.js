import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            product:[
                {
                    title:"Fridge",
                    price:20000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/1041/1041363.svg',
                    id:'1'
                },
                {
                    title:"Watch",
                    price:1000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/2972/2972531.svg',
                    id:'2'
                },
                {
                    title:"Washing Machine IFB",
                    price:40000,
                    qty:1,
                    img:'https://www.flaticon.com/premium-icon/icons/svg/2283/2283894.svg',
                    id:'3'
                },
                {
                    
                    title:"MacBook",
                    price:100000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/644/644461.svg',
                    id:'4'
                },
                {
                    
                    title:"IPhone12",
                    price:800000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/644/644458.svg',
                    id:'4'
                },
                {
                    
                    title:"Sofa",
                    price:800000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/3773/3773825.svg',
                    id:'4'
                },
                {
                    
                    title:"Dinning Table",
                    price:800000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/531/531153.svg',
                    id:'5'
                },
                {
                    title:"Television",
                    price:200000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/3159/3159513.svg',
                    id:'6'


                },
                {
                    title:"Dog",
                    price:40000,
                    qty:1,
                    img:'https://www.flaticon.com/svg/static/icons/svg/616/616554.svg',
                    id:'7'


                }


            ]
           
        }
    }
    

    handleIncreaseQty = (x) =>{
        let index=this.state.product.indexOf(x);
        console.log(index);

        let product=this.state.product;

        product[index].qty++;

        this.setState({
            product:product
        });
    }
    handleDecreaseQty = (y) =>{
        
        let index=this.state.product.indexOf(y);
        console.log(index);
        
        let product=this.state.product;
        if(product[index].qty === 0){
            return;
        }
        product[index].qty--;
       
        this.setState({
            product:product
        });
        
    }
    handleDeleteProduct = (z)=>{
        let index=this.state.product.indexOf(z);
        let product=this.state.product;
        product.splice(index,1);
        this.setState({
            product:product
        });
    }



render(){
    return(
       
        <div className='cartItem'>
           {
               this.state.product.map(
                    (i)=>{
                        return(
                            <CartItem
                                product={i} 
                                key={i.id}
                                increaseQty={this.handleIncreaseQty}
                                decreaseQty={this.handleDecreaseQty}
                                deleteProduct={this.handleDeleteProduct}
                            />

                        )
                    }
               )
           }
        </div>

       
        
    );
}
}
export default Cart;