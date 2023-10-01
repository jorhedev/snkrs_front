import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from "./RenderView.module.css"


// eslint-disable-next-line react/prop-types
const RenderView = ({ selectedView }) => {

  switch (selectedView) {
    case 'profile':
      return (
        <div>
          <h1>This is profile</h1>
        </div>
      );
    case 'favorites':
      return (
        <div>
          <h1>this is favorites</h1>
        </div>
      );
    case 'shopping':
      return (
        <div>
          <ShoppingCart />
        </div>
      );
    case 'record':
      return (
        <div>
          <h1>this is record</h1>
        </div>
      );
    default:
      return null;
  }
};

export default RenderView;