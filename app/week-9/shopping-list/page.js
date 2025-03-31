
"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  // Show loading state while checking auth status
  if (!user) {
    return <p className="p-4 text-gray-500">Redirecting to login...</p>;
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/\p{Emoji_Presentation}/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen flex gap-6">
      <div className="flex-1">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">Shopping List</h1>
          <div className="text-sm text-gray-600">
            Logged in as: {user.email}
          </div>
        </div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
