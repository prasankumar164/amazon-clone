import React from 'react'
import './Checkoutproduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,ImgUrl,price,rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
           
        });

    }

    return (
        <div className="checkoutProduct">
             <img className="checkoutproduct__image" src={ImgUrl} alt="image" />
        
           
           <div className="checkoutproduct__info mb-5"> 
           <p className="checkoutproduct__title">
            {title}</p>

            <p className="checkoutproduct__price">
             <small>$</small>
                <strong>{price}</strong>
            </p>

            <p className="checkoutproduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p> <i className="fa fa-star"> </i> </p>
                    ))
                }
           </p>

           <button className="m-0 checkoutproduct__button" onClick={removeFromBasket}> Remove From Basket </button>
          


           </div>

        </div>
    )
}

export default CheckoutProduct






// function CheckoutProduct({id,title,ImgUrl,price,rating}) {
//     return (
//         <div className="checkoutProduct">

//             <img className="checkoutproduct__image" src={ImgUrl} alt="image" />

//             <div className="checkoutproduct__info">
//              <p className="checkoutproduct__title">{title}
//              </p>

//              <p className="checkoutproduct__price">
//              <small>$</small>
//                 <strong>{price}</strong>
//             </p>

//                 <p className="checkoutproduct__rating">
//                {
//                    Array(rating)
//                    .fill()
//                    .map((_) => (
//                        <p> <i className="fa fa-star"> </i> </p>
//                    ))
//                }
//           </p>
          
//          </div>       
            
//         </div>
//     )
// }