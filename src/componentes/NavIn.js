import React from 'react';
import Drawer from './Drawer'
import img from '../imagenes/01.jpg';
import "./NavIn.css";

const NavIn = ({SetCategoria}) => {
    return (
        <div className='navfull'>
        <div className='nav'>
      
            <div className='menu'> <Drawer SetCategoria={SetCategoria}/>

            </div>
            
            </div></div>
    )
}

export default NavIn
// <img  style={{ cursor: "pointer" }}src={img} height="100%" alt='logo' />