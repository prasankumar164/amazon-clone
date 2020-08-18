import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img src="../img/amazon-banner-one.jpg" 
            className="home__img img-fluid" />

        <div className="container-fluid">
        <div className="row">
         <div className="col-md-6 mb-3">
        <Product
         id="1"
         title="Redmi note 7 pro is really well performing, literally it's awesome mobile Buy it here"
         price={12.26}
         rating={5}
        ImgUrl="../img/1 Redmi K20 Glacier Blue 6GB+128GB.png"
         />
           </div> 

         <div className="col-md-6 mb-3">
        <Product
         id="2"
         title="Redmi note 7  is really well performing, literally it's awesome mobile Buy it here"
         price={12.26}
         rating={5}
        ImgUrl="../img/speaker.jpg"
         />
           </div> 
  
         </div>
         </div>
         
         
          
        <div className="container-fluid">
        <div className="row">
         <div className="col-md-4 mb-3">
        <Product
         id="3"
         title="Redmi note 7 pro is really well performing, literally it's awesome mobile Buy it here"
         price={12.26}
         rating={5}
        ImgUrl="../img/amazon-echo.jpg"
         />
           </div> 

         <div className="col-md-4 mb-3">
        <Product
         id="123456"
         title="Redmi k20 pro is really well performing, literally it's awesome mobile Buy it here"
         price={12.26}
         rating={5}
        ImgUrl="../img/laptop.jpg"
         />
           </div> 

        <div className="col-md-4 mb-3">
        <Product
         id="4"
         title="Redmi note 9 pro is really well performing, literally it's awesome mobile Buy it here"
         price={12.26}
         rating={5}
         ImgUrl="../img/watch.jpg"
       
         />
           </div>   
  
         </div>
         </div>
          




         <div className="container-fluid">
        <div className="row">
         <div className="col-md-12 mb-3">
        <Product
         id="5"
         title="Redmi note 8 pro is really well performing, literally it's awesome mobile Buy it here"
         price={12.26}
         rating={5}
         ImgUrl="../img/shooes.jpg"
         />
           </div> 
  
         </div>
         </div>



       
         
          

        </div>
    )
}

export default Home
