import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Question({ ques_title, user_id, category_id, post_date,
     modify_date, ques_desc, ques_point, head_img, who_chosen, vote_count}) {
  return (
    <div className="question">
      {ques_title}
    </div>
  );
}

Question.propTypes = {
  ques_title: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired,
  category_id: PropTypes.string.isRequired,
  post_date: PropTypes.number.isRequired,
  modify_date: PropTypes.string.isRequired,
  ques_desc: PropTypes.string.isRequired,
  ques_point: PropTypes.number.isRequired,
  head_img: PropTypes.string.isRequired,
  who_chosen: PropTypes.string.isRequired,
  vote_count: PropTypes.string.isRequired,
};

export default Question;