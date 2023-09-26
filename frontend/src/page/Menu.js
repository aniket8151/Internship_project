import React from 'react';

const Menu = () => {
  return (
    <div>
      {/* <h2>About Page</h2>
      <p>This is the About page content.</p> */}
      
      {/* Embed the HTML content using an iframe */}
      <iframe
        title="Embedded HTML"
        src="http://127.0.0.1:5000"  // Replace with the URL where your Flask app serves the HTML
        width="100%"
        height="800"
      ></iframe>
    </div>
  );
}

export default Menu;