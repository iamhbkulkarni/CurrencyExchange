import React, { Component } from 'react';
import './App.css';

import CurrencySelection from './components/CurrencySelection';
import CurrencyExchangeChart from './components/CurrencyExchangeChart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCurrency: '',
      currencyOptions: [],
    };
  }

  updateSelectedCurrency = (selectedCurrency) => {
    this.setState({ selectedCurrency });
  };

  currencyOptions = [];

  componentDidMount = () => {
    fetch('/currencies')
      .then((response) => response.json())
      .then((currencyOptions) => {
        this.setState({
          currencyOptions: currencyOptions,
          selectedCurrency: currencyOptions[0].acronym,
        });
      });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Currency Exchange</p>
        </header>
        <main>
          {this.state.selectedCurrency !== '' && (
            <div className='container'>
              <CurrencySelection
                currencyOptions={this.state.currencyOptions}
                selectedCurrency={this.state.selectedCurrency}
                updateSelectedCurrency={this.updateSelectedCurrency}
              />
              <CurrencyExchangeChart
                selectedCurrency={this.state.selectedCurrency}
              />
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
