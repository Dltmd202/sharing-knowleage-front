import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Footer from "./components/home/Footer";
import Home from "./routes/Home";
import QuestionBase from "./components/question/QuestionBase"
import './App.css';

function App() {
  console.log("App render()");
  return (
        <HashRouter>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/question" component={QuestionBase}/>
            <Footer />
        </HashRouter>
  );
}

export default App;
