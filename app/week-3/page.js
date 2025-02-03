import React from 'react';
import ItemList from './item-list';

const Page = () => (
  <main className="p-6 bg-black min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-6 text-white">Shopping List</h1>
    <ItemList />
  </main>
);

export default Page;