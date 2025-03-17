"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupBy, setGroupBy] = useState(false);

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  const groupedItems = groupBy
    ? sortedItems.reduce((groups, item) => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
        return groups;
      }, {})
    : { All: sortedItems };

  return (
    <div>
      <div className="mb-6 flex gap-4">
        <button
          className={`p-2 border rounded shadow-md ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 border rounded shadow-md ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`p-2 border rounded shadow-md ${groupBy ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          onClick={() => setGroupBy(!groupBy)}
        >
          Group by Category
        </button>
      </div>

      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="mb-4">
          {groupBy && <h2 className="capitalize font-bold text-xl text-black mb-2">{category}</h2>}
          <ul className="list-disc ml-6">
            {groupedItems[category].map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ItemList;