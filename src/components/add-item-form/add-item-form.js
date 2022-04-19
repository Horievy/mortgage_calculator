import React, { useState } from 'react';

import './add-item-form.css';

const AddItemForm  = ({id, onAddItem}) => {
  const [isAddEnabled, toggleAddBlock] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedBankData = getFormData(e.target)

    onAddItem(updatedBankData);
    toggleAddBlock(!isAddEnabled)
  }

  const getFormData = (target) => {
    return {
      bankName: target.bankName.value,
      id: id,
      interestsRate: +target.interests.value,
      maximumLoan: +target.maximumLoan.value,
      minDownPayment: +target.minDownPayment.value,
      loanTerm: +target.loanTerm.value,
      } 
  }

    return (
      <div className="add-item-wrap">
        <button type="submit"
                className="btn btn-success add-item"
                onClick={() => toggleAddBlock(!isAddEnabled)}>
                  Add item
        </button>

        {isAddEnabled &&
        <form 
          className="edit-bank-list-item"
          onSubmit={onSubmit}>
          <div>
            <h4 className="edit-bank-list-item-label">Add new bank</h4>
          </div>
        
            <div className="form-group">
              <label>Bank Name *:
                <input required name="bankName" className="form-control" type="text"></input>
              </label>
            </div>
            <div className="form-group">
              <label>InterestsRate *:
                <input required name="interests" className="form-control" type="number"></input>
              </label>
            </div>
            <div className="form-group">
              <label>Maximum loan *: 
                <input required name="maximumLoan" className="form-control" type="number"></input>
              </label>
            </div>
            <div className="form-group">
              <label>Minimum down payment *:
                <input required name="minDownPayment" className="form-control" type="number"></input>
              </label>
            </div>
              <div className="form-group">
              <label>Loan term in months *:
                <input required name="loanTerm" className="form-control" type="number"></input>
              </label>
            </div>
        
          <div className="edit-bank-list-buttons">
            <button type="submit"
                    className="btn btn-outline-success btn float-right">
                      Save
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn float-right"
                    onClick={() => toggleAddBlock(!isAddEnabled)}>
                      Cancel
            </button>
          </div>
        
        </form>
          }         
      </div>
    );
}

export default AddItemForm;