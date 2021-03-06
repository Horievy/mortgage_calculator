import React, { useState } from 'react';

import './mortgage-calculator.css';

const MortgageCalculator = ({banks}) => {
  const [selectedBankData, toggleBankChoice] = useState(null);
  const [payment, setMonthPayment] = useState(null);

  const banksOptions = banks.map((item) => {
    return (
      <option 
        key={item.id}
        value={item.id}>
        {item.bankName}
      </option>
    );
  });

  const handleChange = (e) => {
    const selectedBankId = +e.target.options[e.target.selectedIndex].value;
    const selectedBank = banks.find((bank) => bank.id === selectedBankId);

    toggleBankChoice(selectedBank)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const downPayment = e.target.downPayment.value;
    const initLoan = e.target.initLoan.value;
    const amountBorrowed = initLoan - downPayment;
    const monthlyInterests = +selectedBankData.interestsRate / 100 / 12

    const monthPayment = calculateMonthlyPayment(+amountBorrowed, selectedBankData.loanTerm, monthlyInterests);
    setMonthPayment(monthPayment)
  }

  const calculateMonthlyPayment = (p, n, i) => {
    return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  }

  return (
    <div className="mortgage-calculator">
        <form 
          onSubmit={onSubmit}>
          <div>
            <h4 className="edit-bank-list-item-label">Calculate your mortgage</h4>
          </div>
        
          <div className="form-group">
          <label>Select your bank *
            <select required onChange={handleChange} className="custom-select">
              <option value="">Select bank</option>
              {banksOptions}
            </select>
            </label>
          </div>
          <div className="form-group">
            <label>Initial loan *:
              <input required name="initLoan" className="form-control" type="number" max={selectedBankData && selectedBankData.maximumLoan}/>
            </label>
            {selectedBankData && <span className="mortgage-calculator__info">(max loan is {selectedBankData && selectedBankData.maximumLoan})</span>}
          </div>
          <div className="form-group">
            <label>Down payment *:
              <input required name="downPayment" className="form-control" type="number" min={selectedBankData && selectedBankData.minDownPayment}/>
            </label>
            {selectedBankData && <span className="mortgage-calculator__info">(min down payment is {selectedBankData && selectedBankData.minDownPayment})</span>}
          </div>
          {selectedBankData &&
            <div>
              <span>Interests Rate: {selectedBankData.interestsRate}%</span>
              <br/>
              <span>Loan term: {selectedBankData.loanTerm} months</span>
            </div>
          }
        
          <div className="edit-bank-list-buttons">
            <button type="submit"
                    className="btn btn-outline-success btn float-right">
                      Calculate
            </button>
          </div>
        
        </form>

        { payment && <h5>Payment amount is {payment.toFixed(2)} $</h5> }
    </div>
    
  );
}

export default MortgageCalculator;