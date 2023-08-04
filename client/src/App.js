import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './components/pages/Home';

import MyTrips from './components/pages/MyTrips'

// import SearchLocation from './pages/SearchLocation';
// import Navbar from './components/Navbar';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* <Navbar /> */}
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MyTrips' element={<MyTrips />} />
          {/* Catch all path if user navigates to a path that does not exist */}
          <Route path='*' element={<h1 className="display-2">Wrong page!</h1>}/>
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
};