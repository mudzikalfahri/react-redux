import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, color}) => (
    <div className='menu-item'>
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
    </div>
);

export default MenuItem;