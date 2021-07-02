import React from 'react';
import './menu-item.styles.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const MenuItem = ({ title, imageUrl, color}) => {
    const [loading,setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true)
        const timing = setTimeout(() => {
        setLoading(false)
        }, 3000);
        return () => clearTimeout(timing)
    }, []);

    return (
    <Link to='/shop' className='menu-item'>
        {loading && <Skeleton width={1440} height={800}/>}
        {!loading && <div 
        className='background-image'
        style={{
        backgroundImage: `url(${imageUrl})`
        }}>     
        </div>}
        
      <div className='content' style={{background: `${color}`}}>
            <div className='title'>
                {title}
            </div>
        </div>
    </Link>
    )
}

export default MenuItem;