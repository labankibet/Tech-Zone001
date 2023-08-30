import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] =useState (false);

  const toggleCartStatus = () => {
    setIsInCart(prevStatus => !prevStatus);
  };
  return (
      <li className={isInCart ? 'in-cart' : 'Add to Cart'}>
        {name} - {category}
      <button onClick={toggleCartStatus}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
       </li>
  );
}

export default Item;
