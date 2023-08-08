import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MyTrips from './components/pages/MyTrips';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from './context/authContext';
import client from './apolloClient';

export default function App() {
  return (
    <AuthProvider>
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mytrips' element={<MyTrips />} />
          {/* Catch all path if user navigates to a path that does not exist */}
            <Route path='*' element={<h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
    </AuthProvider>
  );
};