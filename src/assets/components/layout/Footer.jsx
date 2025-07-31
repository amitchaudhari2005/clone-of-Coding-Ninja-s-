import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-auto">
      © {new Date().getFullYear()} Coding Ninjas Clone. All rights reserved.
    </footer>
  );
};

export default Footer;
