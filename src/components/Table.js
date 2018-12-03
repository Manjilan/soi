import React, { Component } from 'react';
import "./Table.css";
import Row from "./Row";
import API from "../utils/API";

class Table extends Component {
  constructor(){
    super();
    this.state={
    investments:[]
    }
  }
  componentDidMount(){
    API.getInvestments()
    .then(response =>{
      console.log(response.data);
      this.setState({investments: response.data})
    })
  }
  render(){
    return(
      <div className="table">
        <div className="row">
          <p className="columnName">Investment</p>
          <p className="columnName">Asset</p>
          <p className="columnName">Investment Date</p>
          <p className="columnName">Shares</p>
          <p className="columnName">Cost</p>
        </div>
        <Row info={this.state.investments}/>
      </div>
    )
  }
}
export default Table;
