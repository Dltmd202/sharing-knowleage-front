import logo from './logo.svg';
import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./components/home/Navigation";
import Footer from "./components/home/Footer";
import Home from "./routes/Home";
import QuestionList from "./components/question/QuestionList";
import Base from "./components/question/Base"
import './App.css';

function App() {
  return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}/>
            <Route path="/" component={Base}/>
            <Route path="/question" component={QuestionList}/>
            <Footer />
        </HashRouter>
  );
}

export default App;
