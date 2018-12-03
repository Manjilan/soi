import React, { Component } from 'react';
import "./InvestmentDate.css";

class InvestmentDate extends Component {
  render(){
    return(
      <div>
        <label>Please pick a date</label>
        <input type="date" placeholder="Pick a date"/>
      </div>
    )
  }
}
export default InvestmentDate;
