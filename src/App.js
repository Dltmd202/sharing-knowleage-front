import logo from './logo.svg';
import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import QuestionList from "./components/QuestionList";
import './App.css';

function App() {
  return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}/>
            <Route path="/question" component={QuestionList}/>
            <Footer />
        </HashRouter>
  );
}

export default App;
