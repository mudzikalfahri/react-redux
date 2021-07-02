import { addItem } from '../../redux/cart-button/cart-actions';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ReactComponent as Cart } from '../../assets/cart-shop.svg';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const CollectionItem = ({item, title, addItem}) => {
  const[loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    const timing = setTimeout(() => {
      setLoading(false)
    }, 4000);
    return () => clearTimeout(timing)
  }, []);

  const { name, price, imageUrl } = item;
  return (
  <div className='collection-item'>
    {loading && <Skeleton animation="wave" variant="rect" width={250} height={300}/>}
    {!loading && <LazyLoadComponent>
      <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
    </LazyLoadComponent>}
    <div className='collection-footer'>
        <div className="name-pr">
          <span className='name'>{name}</span>
          <span className='price'>$ {price}</span>
        </div>
        <button className='addcart' onClick={() => addItem(item)}>
          <Cart className='cart'/>
          </button>
    </div>
  </div>
)};


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);