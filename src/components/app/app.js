import { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import AppHeader from '../app-header';
import BankList from '../bank-list';
import AddItemForm from '../add-item-form';
import MortgageCalculator from '../mortgage-calculator';


import './app.css';
export default class App extends Component {
  constructor() {
    super();

    this.minId = 1;

    this.state = {
      banksData: [
        {
          bankName: 'First Bank',
          interestsRate: 10,
          maximumLoan: 100000,
          minDownPayment: 10000,
          loanTerm: 120,
          id: this.minId++
       },
       {
          bankName: 'Best Bank',
          interestsRate: 0.000001,
          maximumLoan: 100000000,
          minDownPayment: 1000,
          loanTerm: 120,
          id: this.minId++
        },
        {
          bankName: 'Evil Bank',
          interestsRate: 24.6,
          maximumLoan: 13000000,
          minDownPayment: 666,
          loanTerm: 666,
          id: this.minId++
        }
      ],
    }
  }

  deleteItem = (id) => {
    this.setState(({banksData}) => {
      return {
        banksData: banksData.filter(el => el.id !== id)
      }
    })
  }

  addItem = (newArrItem) => {
    this.setState(({banksData}) => {
      const updatedArr = [...banksData, newArrItem];

      return {
        banksData: updatedArr
      }
    })
  }

  onEdit = (editedEl) => {
    console.log(editedEl)
    console.log(this.toggleProp(this.state.banksData, editedEl))
    this.setState(({banksData}) => {
      return {
        banksData: this.toggleProp(banksData, editedEl)
      }
    })
  }

  toggleProp = (arr, newEl) => {
      return arr.map((item) => {
        if (item.id === newEl.id) item = newEl;

        return item;
      })
  }

  render() {
    return (
        <Routes>
          <Route 
            path="*" 
            element={
            <div>
              <AppHeader/>
              <div className="banks">
                <BankList 
                  banks={this.state.banksData}
                  onDeleted={this.deleteItem}
                  onEdit={this.onEdit}/>
                <AddItemForm 
                    onAddItem={this.addItem}
                    id={this.minId++} />
              </div>
            </div>} 
          />

          <Route 
            path="calculate" 
            element={
              <div>
                <AppHeader/>
                <MortgageCalculator
                  banks={this.state.banksData}
                  />
              </div>}
          />
        </Routes>
    );
  }
 }

    // // <div className="mortgage-calculator">
    //          
    //       </>} /> */}
    //       {/* <Route path="invoices" element={<Invoices />} /> */}
    //   // </div>