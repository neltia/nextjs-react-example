import React from 'react';

function SideBar() {
  return (
    <div className="h-full w-64 bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-xl font-bold">Sidebar</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
        <li><a href="#" className="hover:text-gray-300">Settings</a></li>
        <li><a href="#" className="hover:text-gray-300">Profile</a></li>
        <li><a href="#" className="hover:text-gray-300">Logout</a></li>
      </ul>
    </div>
  );
}

export default SideBar;
