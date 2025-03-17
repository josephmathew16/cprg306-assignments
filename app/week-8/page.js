"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0] // Remove quantity
      .replace(/\p{Emoji_Presentation}/gu, "") // Remove emojis
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen flex gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-black mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}