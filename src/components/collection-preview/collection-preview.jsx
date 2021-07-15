import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    {/* <h1 className='title'>{title}</h1> */}
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 8)
        .map((item) => (
          <CollectionItem key={item.id} item={item} title={title}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;