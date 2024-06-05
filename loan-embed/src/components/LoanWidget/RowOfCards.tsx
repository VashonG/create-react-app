import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card'; // ensure it imports the updated Card component

const RowOfCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default RowOfCards;
