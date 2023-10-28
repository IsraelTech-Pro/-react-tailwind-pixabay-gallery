import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
     <style>
        {`
          /* Include Tailwind CSS classes here */
          @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
          /* Your custom styles go here */
        `}

      </style>
      </>
    <App />
  </React.StrictMode>
);
