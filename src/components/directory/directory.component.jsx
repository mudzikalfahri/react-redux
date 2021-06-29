import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'YEAR END SALE 40%',
          imageUrl: 'https://i.ibb.co/Pzd0LRZ/junko-nakase-Q-72wa9-7-Dg-unsplash.jpg',
          id: 1,
          color: '#FFF846'
        },
        {
          title: 'FOOTWEAR',
          imageUrl: 'https://i.ibb.co/CMPt35J/camila-damasio-m-WYhr-Oi-Agm-A-unsplash.jpg',
          id: 2,
          color: '#B1FF31'
        },
        {
          title: 'T-SHIRT',
          imageUrl: 'https://i.ibb.co/XZvc9CN/sarah-dorweiler-fr0-J5-GIVyg-unsplash.jpg',
          id: 3,
          color: '#6FFFFF'
        },
        {
          title: 'PANTS',
          imageUrl: 'https://i.ibb.co/SwZMCm5/eda-ulu-HWEj-Ie7rc7w-unsplash.jpg',
          id: 4,
          color:'#EA68FF'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
          {this.state.sections.map(({ title, imageUrl, id, color }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} color={color}/>
        ))}
      </div>
    );
  }
}

export default Directory;