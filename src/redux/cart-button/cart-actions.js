export const setToggleCart = () => ({
    type: 'TOGGLE_CART_HIDDEN'
});
export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
  });

  export const clearItemFromCart = item => ({
    type: 'DELETE_ITEM',
    payload: item
  });