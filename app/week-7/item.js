"use client";

function Item({ name, quantity, category }) {
  return (
    <li className="text-lg text-black mb-2">
      {name} - {quantity} ({category})
    </li>
  );
}

export default Item;