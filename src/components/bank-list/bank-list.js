import React from 'react';

import BankListItem from '../bank-list-item/bank-list-item';
import './bank-list.css';

const BankList = ({ banks, onDeleted, onEdit }) => {

  const elements = banks.map((item) => {

    return (
      <li key={item.id} className="list-group-item">
        <BankListItem 
          { ...item }
          onDeleted={() => onDeleted(item.id)}
          onEdit={onEdit} />
      </li>
    );
  });

  return (
    <ul className="list-group bank-list">
      { elements }
    </ul>
  );
};

export default BankList;
