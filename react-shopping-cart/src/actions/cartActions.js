import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

/*
    items: current items in the cart
    product: we are going to add to the cart
*/
export const addToCart = (product) => (dispatch, getState) => {
    //Slice, check product existance, add to cartitems
    const cartItems = getState().cart.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
        if(item._id === product._id){
            item.count++;
            alreadyInCart++;
        }
    });
    if(!alreadyInCart) {
        cartItems.push({...product, count: 1});
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems }, 
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
   const cartItems = getState().cart.cartItems.slice().filter(x => x._id !== product._id);
   dispatch({
       type: REMOVE_FROM_CART,
       payload: {cartItems},
   });
   localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
}; 