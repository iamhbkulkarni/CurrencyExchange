import React, { Fragment } from 'react';

const CurrencySelection = ({
  currencyOptions,
  selectedCurrency,
  updateSelectedCurrency,
}) => {
  return (
    <Fragment>
      Select a currency:{' '}
      <select
        value={selectedCurrency}
        onChange={(e) => {
          updateSelectedCurrency(e.target.value);
        }}>
        {currencyOptions.map((currency) => (
          <option key={currency.acronym} value={currency.acronym}>
            {currency.acronym} - {currency.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default CurrencySelection;
