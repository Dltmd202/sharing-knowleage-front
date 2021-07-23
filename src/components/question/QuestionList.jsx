import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../home/Navigation.css';
import Question from "./Question";

class QuestionList extends React.Component {
  state = {
    isLoading: true,
    questions: []
  };

  getQuestions = async () => {
    const{
        data: questions
    }  = await axios.get(
      "http://127.0.0.1:8000/viewset/question/questions/?format=json"
    );
    console.log(questions)
    this.setState({questions});
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    const
    {
      questions
    } = this.state;
    console.log(typeof questions);
    return (
      <div>
        {questions.map(question => (
          <Question
            ques_desc={question.ques_desc}
            ques_point={question.ques_point}
            ques_title={question.ques_title}
            modify_date={question.modify_date}
            vote_count={question.vote_count}
            head_img={question.head_img}
            user_id={question.user_id}
            category_id={question.category_id}
            post_date={question.post_date}
            who_chosen={question.who_chosen}
          />
        ))}
      </div>
    );
  }
}


export default QuestionList;