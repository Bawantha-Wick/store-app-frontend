import React, { useState } from 'react';
import '../styles/item_tile.css';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const ItemTile = ({ item }) => {
  const [amount, setAmount] = useState(1);
  const [isLike, setIsLike] = useState(false);

  const handleIconClick = () => {
    setIsLike(!isLike);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div>
      <div className="item-tile">
        <a className="card-header">Tap to view details</a>
        <div className="image-frame-main">
          {isLike ? <AiFillHeart className="like" onClick={handleIconClick} /> : <AiOutlineHeart className="like" onClick={handleIconClick} />}

          <img className="image-frame" src={item.imageURL} alt={item.title} />
        </div>
        <dev className="card-data">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <label className="label-amount">₹{item.price}</label>
        </dev>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="count-area" style={{ display: 'grid', color: 'black', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <button onClick={decreaseAmount} className="count-btn plus-btn">
            -
          </button>
          <div style={{ display: 'grid', color: 'black', gridTemplateColumns: 'repeat(1, 1fr)' }}>
            <label className="item-count">{`${amount}`}</label>
            <label className="count-label">Nos</label>
          </div>
          <button onClick={increaseAmount} className="count-btn minus-btn">
            +
          </button>
        </div>
        <button className="cart-btn" style={{ gridColumn: '2 / span 2' }}>
          <AiOutlineShoppingCart className="cart-icon" /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemTile;
