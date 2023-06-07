import React, { useState, useEffect } from 'react';
import '../styles/home_page.css';

import config from '../../constants/config';

import ItemTile from './ItemTile';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${config.baseURL}/api/items/all`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <ItemTile key={index} item={item} />
      ))}
    </div>
  );
};

export default HomePage;
