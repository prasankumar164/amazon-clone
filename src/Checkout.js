import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckOut.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">



          <div className="checkout__banner container-fluid"> 
          <div className="row">
            <div className="col-md-8 col-sm-8">
          <img src="../img/checkout-banner.jpg" className="img-fluid checkout__ad" alt="checkout" />
        

          
          <div className="checkout__container"> 
           {
               basket?.length === 0 ? (
                   <div>
                        <h2 className="checkout__heading">Your Shopping Basket Is Empty</h2>
                        <p>you have no items in your cart go and add some products and come again</p> 
                 </div>
               ) : (
                <div> 
                    <h2 className="checkout__heading">Your Shopping Basket</h2>

              { basket.map(item=> (
                <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 ImgUrl={item.ImgUrl}
                 price={item.price}
                 rating={item.rating}
                />
              ))}

               </div>
               )
           }

           </div>
           </div>


           <div className="col-md-4 col-sm-4"> 
           {
               basket.length > 0 && (
                   <div className="checkout__right"> 
                <Subtotal/>
                </div>
               )
           }
           </div>

           </div>  


           



           </div>
        
        </div>
    )
}

export default Checkout
