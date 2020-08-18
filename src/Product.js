import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, ImgUrl}) {

    const [{}, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: "Add_TO_BASKET",
            item: {
                id: id,
                title: title,
                ImgUrl:ImgUrl,
                price:price,
                rating:rating,
            },
        });
        
    };

    return (
        <div className="product">

            <div className="product__info">

            <p>{title}</p>

            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <p className="product__rating">
               {
                   Array(rating)
                   .fill()
                   .map((_) => (
                       <p> <i className="fa fa-star"> </i> </p>
                   ))
               }
            </p> 
             
             <div className="product__image text-center">
            <img src={ImgUrl} className="img-fluid p__image" /> <br/> 
            </div>

            <div className="product__button text-center">
            <button type="button" onClick={addToBasket} className="btn mt-2">Add to basket</button>
            </div>
            
            </div>
        </div>
    )
}

export default Product
