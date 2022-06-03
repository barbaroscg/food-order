import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Cartpage() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6"></div>
        <h1>{cartItems.lenght}</h1>
        {console.log(cartItems.lenght)}
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Cartpage;
