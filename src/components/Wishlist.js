// Wishlist.js
import React from 'react';
import { useSelector } from 'react-redux';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
