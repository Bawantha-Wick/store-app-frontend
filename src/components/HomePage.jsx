import React, { useState, useEffect } from 'react';
import '../styles/home_page.css';

import ItemTile from './ItemTile';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/albums')
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid-container">
      {items.map((item) => (
        <ItemTile key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomePage;
