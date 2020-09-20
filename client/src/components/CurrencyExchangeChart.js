import React, { Component } from 'react';

class CurrencyExchangeChart extends Component {
  constructor() {
    super();
    this.state = {
      exchangeRates: null,
    };
  }

  updateRates = () => {
    fetch(
      `https://api.exchangeratesapi.io/latest?base=${this.props.selectedCurrency}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ exchangeRates: Object.entries(data.rates) });
      });
  };

  componentDidMount() {
    this.updateRates();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedCurrency !== this.props.selectedCurrency) {
      this.updateRates();
    }
  }

  render() {
    return (
      <div className='exchange-rates-container'>
        {this.state.exchangeRates &&
          this.state.exchangeRates.map(([currency, rate]) => {
            return (
              currency !== this.props.selectedCurrency && (
                <div key={currency} className='currency-rate'>
                  <div className='currency-item'>{currency}</div>
                  <div className='exchange-rate-item'>{rate}</div>
                </div>
              )
            );
          })}
      </div>
    );
  }
}

export default CurrencyExchangeChart;
