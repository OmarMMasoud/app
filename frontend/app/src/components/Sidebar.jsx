import React from 'react';
import {SidebarData} from './SidebarData'
import '../App.css'

const Sidebar = () => {
 return <div className='Sidebar'>
        <ul>
          {SidebarData.map((val,key)=>{
           return (
            <li key={key} 
            className='navItem'
            onClick={()=>{window.location.pathname = val.link}}>
              <div>{val.Icon}</div>
            <div>{val.titel}</div>
            </li>
           )   
          })}
        </ul>
         </div> 
    
};

export default Sidebar;