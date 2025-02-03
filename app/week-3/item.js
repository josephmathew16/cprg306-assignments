import React from 'react';

const Item = ({ name, quantity, category }) => (
  <li className="p-4 border-b border-gray-300 bg-white">
    <h2 className="text-lg font-semibold text-black">{name}</h2>
    <p className="text-gray-700">Buy {quantity} in {category}</p>
  </li>
);

export default Item;