"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold text-black">Add New Item</h2>
      
      <label className="block w-full text-black font-semibold">
        Item Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="w-full p-2 border rounded-lg text-black" 
        />
      </label>

      <label className="block w-full text-black font-semibold">
        Quantity:
        <div className="flex items-center space-x-4 mt-2">
          <button
            onClick={decrement}
            type="button"
            disabled={quantity === 1}
            className={`px-4 py-2 rounded-md text-white ${quantity === 1 ? "bg-gray-300" : "bg-red-500 hover:bg-red-600"}`}
          >
            -
          </button>
          <span className="text-xl font-bold text-black">{quantity}</span>
          <button
            onClick={increment}
            type="button"
            disabled={quantity === 20}
            className={`px-4 py-2 rounded-md text-white ${quantity === 20 ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"}`}
          >
            +
          </button>
        </div>
      </label>

      <label className="block w-full text-black font-semibold">
        Category:
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="w-full p-2 border rounded-lg mt-2 text-black">
          {[
            "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods",
            "Dry Goods", "Beverages", "Snacks", "Household", "Other"
          ].map((cat) => (
            <option key={cat} value={cat.toLowerCase()}>{cat}</option>
          ))}
        </select>
      </label>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 font-semibold">
        Add Item
      </button>
    </form>
  );
}