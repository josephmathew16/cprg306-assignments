"use client";

import { useState } from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [groupBy, setGroupBy] = useState(false);

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  const groupedItems = groupBy
    ? sortedItems.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) groups[category] = [];
        groups[category].push(item);
        return groups;
      }, {})
    : { All: sortedItems };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-lg min-h-screen">
      <div className="mb-6 flex gap-4 justify-center">
        <button
          className={`p-3 border rounded-lg shadow-md transition-all duration-200 ${sortBy === "name" ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-gray-200"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`p-3 border rounded-lg shadow-md transition-all duration-200 ${sortBy === "category" ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-gray-200"}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`p-3 border rounded-lg shadow-md transition-all duration-200 ${groupBy ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-gray-200"}`}
          onClick={() => setGroupBy(!groupBy)}
        >
          Group by Category
        </button>
      </div>

      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="mb-6 p-4 bg-white shadow-md rounded-lg">
          {groupBy && <h2 className="capitalize font-bold text-xl text-gray-800 mb-2 border-b pb-2">{category}</h2>}
          <ul className="list-none space-y-2">
            {groupedItems[category].map((item) => (
              <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ItemList;