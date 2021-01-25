import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createApolloClient } from "./controllers/apolloController"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter, Route } from "react-router-dom";

//import user components (navbar)
import NavBar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
//import user Pages

import Home from "./pages/Home/home";
import Login from "./pages/LoginPage/Login";



ReactDOM.render(
  <ApolloProvider client={createApolloClient()}>
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path='/login' component={Login} />
          <PrivateRoute exact path="/Dashboard" isAuthenticated={true}  renderComponent={App} />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

