import React, { Component } from 'react';

class Row extends Component {
  constructor(){
    super();
    this.state={
      active: false
    };
    this.showInvestmentDetails=this.showInvestmentDetails.bind(this);
  }
  showInvestmentDetails = () =>{
    this.setState({active: !this.state.active})
  };
  render(){
    let info=this.props.info.map((investmentInfo, index)=>{
      let details=investmentInfo.issued_assets.map((asset, index)=>{
        return (
          <div className="row" key={asset.id}>
            <p className="column">{}</p>
            <p className="column">{asset.asset_class}</p>
            <p className="column">{asset.investment_date}</p>
            <p className="column">{asset.quantity}</p>
            <p className="column">{asset.cost.$} $</p>
          </div>);
      });
      return (
        <div key={investmentInfo.id}>
          <div className="row">
            <p className="column"><i class="fas fa-plus" onClick={this.showInvestmentDetails}></i> {investmentInfo.name}</p>
            <p className="column">{}</p>
            <p className="column">{}</p>
            <p className="column">{investmentInfo.quantity}</p>
            <p className="column">{investmentInfo.cost.$} $</p>
          </div>
          {this.state.active && <div className="detailRows">{details}</div>}
      </div>)
    });

    return(
      <div>
      {info}
      </div>
    )
  }
}
export default Row;
