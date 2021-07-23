import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Question({ ques_title, user_id, category_id, post_date, modify_date, ques_desc,
                 ques_point, head_img, who_chosen, vote_count}) {
  return (
    <div className="question">
      <Link
        to={{
          pathname: `/question`,
          state: {
            ques_title, user_id, category_id, post_date, modify_date, ques_desc,
                 ques_point, head_img, who_chosen, vote_count
          }
        }}
      >
        <span>{ques_title}</span>
      </Link>
    </div>
  );
}

Question.propTypes = {
  ques_title: PropTypes.string.isRequired,
  user_id: PropTypes.string,
  category_id: PropTypes.number,
  post_date: PropTypes.string,
  modify_date: PropTypes.string,
  ques_point: PropTypes.number,
  head_img: PropTypes.string,
  who_chosen: PropTypes.string,
  vote_count: PropTypes.string,
};

export default Question;