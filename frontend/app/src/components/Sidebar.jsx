import React, { useState } from 'react';
import {SidebarData} from './SidebarData'
import '../style/Navbar.scss'

const Sidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
     setSidebarOpen(!sidebarOpen);
  };
 return(
  <div>
 

  <div className={sidebarOpen ? 'Sidebar' : 'sidebar-closed'}>

  
      
  <ul className='Nav'>
          {SidebarData.map((val,key)=>{
           return (
            <li key={key} 
            className='navItem'
            onClick={()=>{window.location.pathname = val.link}}>
              <div className='icon'>{val.Icon}</div>
            <div className='titel'>{val.titel}</div>
            </li>
           )   
          })}
        </ul>

        <button className={'openClose'} onClick={toggleSidebar}>
        {sidebarOpen ? 'hi' : 'Open Sidebar'}
      
      </button>

         </div> 
         </div>
 )    
};

export default Sidebar;