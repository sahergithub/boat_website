
import React, { useState } from 'react';
import './Navbar.css';
import boat_logo from '../Images/boat_logo.png';
import cart_icon from '../Images/cart_icon.png';
import user_icon from '../Images/user_icon.png';
import search_icon from '../Images/search_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState("Categories")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
       <img src={boat_logo} alt="" />
      </div>
       <ul className='nave-menu'>
          <li onClick={()=>{setMenu("categories")}}>
            <Link to= '/'>Categories</Link>
            {menu==="Categories"?<hr/>:<></>} 
          </li>
          <li onClick={()=>{setMenu("more")}}>
            <Link to= '/more'>more</Link>
            {menu==="more"?<hr/>:<></>}
          </li>
          <li onClick={()=>{setMenu("boAt Personilisation")}}>
            <Link to= '/boAt Personilisation'>boAt Personilisation</Link>
            {menu==="boAt Personilisation"?<hr/>:<></>} 
          </li>
          <li onClick={()=>{setMenu("Gift with boAt")}}>
            <Link to='/Gift with boAt'>Gift with boAt</Link>
            {menu==="Gift with boAt"?<hr/>:<></>}
          </li>
      </ul>

      <div className="nav-search">
        < input  type="text" placeholder="Search" />
        <img src="{search-icon}" alt="" />
      </div>

      <div className="nav-login-cart">
       <Link to={'/login'} ><img src={user_icon} alt="" /></Link>
       <Link to={'/cart'} > <img src={cart_icon} alt="" /></Link>
      </div>

    </div>
  );
};

export default Navbar;
