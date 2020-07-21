// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/index';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8089/v1/graphql', // 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
  headers: {"x-hasura-admin-secret": "sojernadminsecret"}
});

// GraphQL query for testing purposes

client
  .query({
    query: gql`
      query GetAccounts {
        accounts {
          id
          name
          status
          tier
          region
        }
      }
    `
  })
  .then(result => console.log('ApolloClient test result', result))
  .catch(err => console.log('Error: ApolloClient test result', err))

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
