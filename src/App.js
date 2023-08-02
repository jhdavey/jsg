import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTrips from "./pages/MyTrips";
import Navbar from "./components/Navbar";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get authentication token from local storage if exists
  const token = localStorage.getItem("id_token");
  // return headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// new ApolloClient instance and pass in authLink and httpLink, and cache object
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<MyTrips />} />
            {/* <Route path="/saved" element={<SavedBooks />} /> */}
            <Route
              path="*"
              element={<h1 className="display-2">Wrong Page</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;