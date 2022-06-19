import React from 'react';
import './Card.scss';

const Card = ({ children }) => {
  return <div className='card-container'>{children}</div>;
};

export default Card;
