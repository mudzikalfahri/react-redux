import React from 'react';
import './menu-item.styles.scss';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, color}) => (
    <Link to='/shop' className='menu-item'>
        <div 
        className='background-image'
        style={{
        backgroundImage: `url(${imageUrl})`
        }}>
            
      </div>
      <div className='content' style={{background: `${color}`}}>
            <div className='title'>
                {title}
            </div>
        </div>
    </Link>
);

export default MenuItem;