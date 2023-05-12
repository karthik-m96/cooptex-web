import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="left"></div>
      <div className="item">
        <img src="img/eng.jpg" alt="" />
        <KeyboardArrowDownIcon/>
      </div>
      <div className="center"></div>
      <div className="right"></div>
      </div>
    </div>
  )
}

export default Navbar