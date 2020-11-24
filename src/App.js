import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app'

class  App extends React.Component{
 
  constructor(){

    super();

      this.state = {

        product:[ ],
        loading:true
      }
      this.db=firebase.firestore();
      }

    //   componentDidMount() {
    //     // Reading data from firestore
    //     firebase // from firebase 
    //         .firestore() // database called
    //         .collection('products') // the collection from the database
    //         .get() // gets the instance of the collection and returns a promise
    //         .then((snapshot) => { // promise resolves and the callback has the data from the database
    //             let product = snapshot.docs.map((i) => { // docs contains the array of data and map function returns the array
    //                 let o = i.data(); // here i.data() function gives the actual object containing our fields
    //                 o['id'] = i.id; // we create another field in our object to store id
    //                 return o; // and return this object which will be stored as an element in our product array
    //             });

    //             // then we set the state with all the objects from firestore
    //             this.setState({
    //                 product,
    //                 loading: false
    //             });
    //         });
    // }

    componentDidMount() {
      // Reading data from firestore
      firebase // from firebase 
          .firestore() // database called
          .collection('products') // the collection from the database
        //  .where('price','==' , 40000)
          // .orderBy('price')  //To sort in ascending order
           .orderBy('price','desc') // To  sort in descending order
          .onSnapshot((snapshot) => {    //Any change in the DB will automatically refresh the browser withouth manually refreshing
              let product = snapshot.docs.map((i) => { // docs contains the array of data and map function returns the array
                  let o = i.data(); // here i.data() function gives the actual object containing our fields
                  o['id'] = i.id; // we create another field in our object to store id
                  return o; // and return this object which will be stored as an element in our product array
              });

              // then we set the state with all the objects from firestore
              this.setState({
                  product,
                  loading: false
              });
          });
  }
         
handleIncreaseQty = (x) =>{
    let index=this.state.product.indexOf(x);

    let product=this.state.product;
    
    const docRef=firebase.firestore().collection('products').doc(product[index].id);

    docRef.update({
     qty: product[index].qty+1
    })
    .then(()=>{
      console.log('Updated Successfully')
    })
    .catch((error)=>{
      console.log('Error',error)
    });
}
handleDecreaseQty = (y) =>{
    
          let index=this.state.product.indexOf(y);
          
          let product=this.state.product;
          if(product[index].qty === 0){
              return;
          }
         const docRef=firebase.firestore().collection('products').doc(product[index].id);
         docRef.update({
           qty:product[index].qty-1
         })
         .then(()=>{
          console.log('Updated Successfully')
        })
        .catch((error)=>{
          console.log('Error',error)
        });
         
    
}
handleDeleteProduct = (z)=>{
    let index=this.state.product.indexOf(z);
    let product=this.state.product;
    const docRef=firebase.firestore().collection('products').doc(product[index].id);
    docRef.delete()
    .then(()=>{
      console.log('Deleted Successfully');
    })
    .catch((error)=>{
      console.log('Error',error);
    });
}
getProductCount=()=>{
  const {product}=this.state
  var count=0;
  // We can also use map insteed of forEach function
  product.forEach((i)=>{
    count=count+i.qty;
  });
  return count;
}
getTotalAmount=()=>{
  const{product}=this.state
  var total=0;
  product.forEach((i)=>{
    total+=i.qty * i.price;
  });
  return total;
}

// Add Product Function
  addProduct=()=>{
    firebase
    .firestore()
    .collection('products')
    .add({
      title:'Mobile',
      price:35000,
      qty:1,
      img:'https://i.gadgets360cdn.com/products/large/moto-g9-650x800-1598251072.jpg'
    })
    .then((docRef)=>{
      console.log('Product is Added', docRef)
    })
    .catch((error)=>{
      console.log('Error',error)
    });
  }

render(){
  
  const {product,loading}=this.state;
  return(
    <div className="App">
        <Navbar 
          count={this.getProductCount()} 
          total={this.getTotalAmount()}

        />
            {loading && <div style={styles.loadingGif} className="loading-gif">
           <img src="https://i.gifer.com/YCZH.gif" alt="Loading"/>
        </div>}
        
       
        <Cart
          product={product}
          onIncreaseQuantity={this.handleIncreaseQty}
          onDecreaseQuantity={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
         <button onClick={this.addProduct}>Add Product</button>
    </div>
  );
}
}
var styles={
  
  loadingGif:{
    textAlign:'center',
    
  }
}

export default App;



