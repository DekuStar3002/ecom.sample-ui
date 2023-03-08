import React from 'react';
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 
function Header() {
  return (
    <div className='header'>
      <p>Shoping App</p>
      <div>
        <ShoppingCartIcon />
        <AccountCircleIcon />
      </div>
    </div>
  )
}


export default Header;
