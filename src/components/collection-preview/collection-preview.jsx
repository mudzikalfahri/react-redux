import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = (props) => (
  <div className='collection-preview'>
    {/* <h1 className='title'>{title}</h1> */}
    <div className='preview'>
      {props.collection.map((item) => (
          <CollectionItem key={item.id} item={item.item} title={item.name}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;