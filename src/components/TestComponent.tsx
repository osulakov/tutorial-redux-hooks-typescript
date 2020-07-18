import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export interface Rate {
    currency: string
}


const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const rates: Rate[] = data.rates;
  
    const ratesList = rates.map(({ currency }) => (
      <div key={currency}>
        <p>
          {currency}: 
        </p>
      </div>
    ));

    return (
        <div>{ ratesList }</div>
    )
}

export default ExchangeRates;