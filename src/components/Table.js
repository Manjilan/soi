import React, { Component } from 'react';
import "./Table.css";
import Row from "./Row";

class Table extends Component {
  constructor(){
    super();
    this.state={
    investments:[],
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ investments:nextProps.inv });
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
