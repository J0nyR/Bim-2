import React from 'react';
import { Link } from 'react-router-dom';

export const AppFooter = () => {
  return (
    <div className="p-4 text-center mt-auto hide-on-print">
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">SMKN 9 Pontianak</p>
      <a
        href="https://www.dyad.sh/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        Made with Dyad
      </a>
      <p className="text-xs text-gray-500 dark:text-gray-400">Copyright by Jony Rabuansyah</p>
    </div>
  );
};

export default AppFooter;