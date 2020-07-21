import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

export interface Rate {
    currency: string,
    rate: string,
    name: string
}


const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const rates: Rate[] = data.rates;
  
    const ratesList = rates.map(({ currency, rate, name }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}, {name}
        </p>
      </div>
    ));

    return (
        <div>{ ratesList }</div>
    )
}

export default ExchangeRates;