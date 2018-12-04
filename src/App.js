import React, { Component } from 'react';
import './App.css';
import InvestmentDate from "./components/InvestmentDate";
import Table from "./components/Table";
import API from "./utils/API";

class App extends Component {
  constructor(){
    super();
    this.state={
    investments:[],
    filtered:[]
    }
    this.filterByDate=this.filterByDate.bind(this);
  }
  componentDidMount(){
    API.getInvestments()
    .then(response =>{
      console.log(response.data);
      this.setState({investments: response.data,
                    filtered:response.data})
      console.log(this.state.investments);

    })
  }
  filterByDate(date){
      if(date === ""){
        this.setState({filtered:this.state.investments});
      }else{
      const filtered = this.state.investments.filter( (el) =>{
        return el.issued_assets.findIndex((eel)=>{
          return eel.investment_date === date;
        }) !== -1;

      });
      this.setState({filtered:filtered});
    }
  }
  render() {
    let inv = this.state.filtered;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Carta Schedule of Investments</h1>
        </header>
        <InvestmentDate filterByDate={this.filterByDate}/>
        <Table inv={inv} />
      </div>
    );
  }
}

export default App;
