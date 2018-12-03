import React, { Component } from 'react';
import './App.css';
import InvestmentDate from "./components/InvestmentDate";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Carta Schedule of Investments</h1>
        </header>
        <InvestmentDate/>
        <Table/>
      </div>
    );
  }
}

export default App;
