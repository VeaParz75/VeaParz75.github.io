import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">Four-oh-oof</h1>
        <p className="text-2xl text-gray-700 mt-4">Stay a while. The internet is a weird place, and you deserve an inventory restock.</p>
        <p className="text-lg text-gray-500 mt-2">just click the button below for a full inventory for the rest of your cyber adventures :D</p>
        <p className="text-lg text-gray-300 mt-1">it definitely isn't a button that leads you to my personal homepage not at all :]</p>
        <a href="/" className="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300">
          Free Inventory Restock!!🪄
        </a>
      </div>
    </div>
  );
};

export default NotFound;