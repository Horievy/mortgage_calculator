import React, { useState } from 'react';

import './bank-list-item.css';

import EditBankListItem from '../edit-bank-list-item/edit-bank-list-item'

const BankListItem = (props) => {
  const [isEditingEnabled, toggleEditBlock] = useState(false);
  const { bankName, interestsRate, maximumLoan, minDownPayment, loanTerm, onDeleted} = props

      return (
        <div>
          <div className="bank-list-item">
          <div>
            <h4 className="bank-list-item-label">{bankName}</h4>
            <ul className="bank-list-options">
              <li className="bank-list-options-item">
                Interests Rate: %{interestsRate}
              </li>
              <li className="bank-list-options-item">
                Maximum loan: ${maximumLoan}
              </li>
              <li className="bank-list-options-item">
                Minimum down payment: ${minDownPayment}
              </li>
              <li className="bank-list-options-item">
                Loan term: {loanTerm} moth
              </li>
            </ul>
          </div>
          
    
          <div className="bank-list-buttons">
            <button type="button"
                    className="btn btn-outline-warning btn-lg float-right"
                    onClick={() => toggleEditBlock(!isEditingEnabled)}>
              <i className="fa fa-edit" />
            </button>
      
            <button type="button"
                    className="btn btn-outline-danger btn-lg float-right"
                    onClick={() => onDeleted()}>
              <i className="fa fa-trash-o" />
            </button>
          </div>
          

          </div>
          {isEditingEnabled && <EditBankListItem
          { ...props }
          isEditingEnabled={isEditingEnabled}
          toggleEditBlock={toggleEditBlock} />}

        </div>
        
      );
}

export default BankListItem;