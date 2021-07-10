import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
import './shop.styles.scss';
import { firestore } from '../../firebase/firebase.utils.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections:[]
    };
  }

  componentDidMount(){
    firestore.collection('tshirts').onSnapshot(snapshot =>{
      this.setState({collections: snapshot.docs.map(doc => ({item: doc.data(), id: doc.id}))
      });
      console.log(this.state.collections);
    })}
  

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {/* <div className="cathegory-list">
          <div className="catall">All Products</div>
          <div className="cat1">T-Shirt</div>
          <div className="cat2" onClick={()=>this.setState({cat:1})}>Footwear</div>
          <div className="cat3" onClick={()=>this.setState({cat:2})}>Pants</div>
        </div> */}
        {/* {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))} */}
        <CollectionPreview key={collections.id} collection={collections} />
      </div>
    );
  }
}

export default ShopPage;