import React, { useState } from 'react';
import logo from "../assets/img/logo.jpg"
import Home from '../pages/Home';


function Header() {

    const tabs = [{
        title:'Company',
        link: "/home",
    },
    {
        title:'Location',
        link: "/location",
    },
    {
        title: 'Contact',
        link: "/contact",
    },
    {
        title: 'Services',
        link: "/services",
    },

    ]
    const [active,setActive] =useState(0)
   
   console.log(active)


    
  return (
    <main>
        <div id='navbar'>
            <div className='logo'>
                <img src={logo} alt='page-logo' />
                <span>DESIGNO</span>
            </div>

            <div className='navTab'>
                <ul>
                {tabs.map((item, i) =>
                    <li key={i} className={active === i ? "" : ""} onClick={() => setActive(i)}>{item.title}</li>
                )}
                </ul> 
            </div>
            
        </div>
        {active ===  0 && <Home/>}  
    </main>
  )
}

export default Header;
