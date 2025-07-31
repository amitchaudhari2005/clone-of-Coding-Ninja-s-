import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-500">Coding Ninjas</h1>
      <nav className="space-x-4">
        <a href="/" className="text-gray-700 hover:text-red-500">Home</a>
        <a href="/about" className="text-gray-700 hover:text-red-500">About</a>
        <a href="/dashboard" className="text-gray-700 hover:text-red-500">Dashboard</a>
      </nav>
    </header>
  );
};

export default Header;
