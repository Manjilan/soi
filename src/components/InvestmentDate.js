import React, { Component } from 'react';
import "./InvestmentDate.css";

class InvestmentDate extends Component {
  constructor(){
    super();
    this.state={
      date:""
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({date: this.parseDate(event.target.value)});
    this.props.filterByDate(this.parseDate(event.target.value));
  }
  parseDate(date){
    let dateDetails = date.split("-");
    let year=dateDetails.shift();
    dateDetails.push(year);
    return dateDetails.join("/");
  }
  render(){
    return(
      <div>
        <label>Please pick a date</label>
        <input type="date" placeholder="Pick a date" onChange={this.handleChange}/>
      </div>
    )
  }
}
export default InvestmentDate;
