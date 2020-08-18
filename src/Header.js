import React from 'react'
import logo from './amazon-logo-four.png'
import './Header.css'
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'



function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    console.log(user);

    return (
        <nav className="header" >
            <Link to="/">
            <img src={logo} className="header__logo" alt="amazon" />
            </Link>

           <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon"/>
          </div>

          <div className="header__nav">

              <Link to={!user && "/login"}  className="header__link">
              <div onClick={login} className="header__option">   
              <span className="header__optionlineOne">Hello {user?.email} </span>
              <span className="header__optionlineTwo">{user ? 'sign Out' : 'Sign in'}</span>
              </div> 
              </Link>

              <Link to="/login"  className="header__link">
              <div className="header__option">   
              <span className="header__optionlineOne">Returns</span>
              <span className="header__optionlineTwo">& Orders</span>
              </div> 
              </Link>

              <Link to="/login"  className="header__link">
              <div className="header__option">   
              <span className="header__optionlineOne">Your</span>
              <span className="header__optionlineTwo">Prime</span>
              </div> 
              </Link>

              <Link to="/checkout"  className="header__optionBasket header__link"> 
               <ShoppingCartIcon />
               <span className="header__optionlineTwo header__basketCount">
                   {basket?.length}
                </span>
              </Link>

          </div>
            
        </nav>
    )
}

export default Header
