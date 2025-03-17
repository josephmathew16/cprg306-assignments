"use client";

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}