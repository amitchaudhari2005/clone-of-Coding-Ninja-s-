import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg h-full p-4 hidden md:block">
      <ul className="space-y-4">
        <li><a href="/" className="hover:text-red-500">Home</a></li>
        <li><a href="/courses" className="hover:text-red-500">Courses</a></li>
        <li><a href="/profile" className="hover:text-red-500">Profile</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
