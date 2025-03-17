"use client";

function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      className="text-lg text-black mb-2 cursor-pointer"
      onClick={() => onSelect(name)}
    >
      {name} - {quantity} ({category})
    </li>
  );
}

export default Item;