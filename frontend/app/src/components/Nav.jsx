import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

function Nav() {
  return (
    <div className='topNav'>
        <div className="logo">HAVANA</div>
        <div className="search">
            <button><IoIosSearch/></button>
            <div className="searchType">order <RiArrowDownSLine/></div>
            <input type="text" placeholder="look for order number, clint’s name, tracking number"/>
            
        </div>
        <div className="userInfo">
            <div className="img"></div>
            <div className="titel">Ali cap store</div>
            <button><RiArrowDownSLine/></button>

        </div>
    </div>
  )
}

export default Nav