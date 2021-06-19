import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ title, id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
        <span className='title-footer'>{title}</span>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
    </div>
  </div>
);

export default CollectionItem;