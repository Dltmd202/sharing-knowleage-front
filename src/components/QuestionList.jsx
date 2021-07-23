import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './Navigation.css';
import Question from "./Question";

class QuestionList extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getQuestions = async () => {
    const
    { data }  = await axios.get(
      "http://127.0.0.1:8000/question/question-api/?format=json"
    );
    console.log(data);
    this.setState([data]);
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    const {data} = this.state;
    return (
      <span>{data}</span>
    );
  }
}


export default QuestionList;