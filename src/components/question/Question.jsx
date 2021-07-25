import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Question.css'

function Question({ id, ques_title, user_id, category_id, post_date,
     modify_date, ques_desc, ques_point, head_img, who_chosen, vote_count}) {
  return (
    <div className="col question">
      <Link to={{
        pathname: `/question/${id}`,
        state: {
          id, ques_title, user_id,
          category_id, post_date,
          modify_date, ques_desc,
          ques_point, head_img,
          who_chosen, vote_count
        }
      }
      }>
        <div className="px-3">
          <div>
            <h5 className="fw-bolder ">{ques_title}</h5>
          </div>
          <hr/>
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
               width="30px" height="110px" alt="..."/>
          <div className="card-body">
            <div className="text-right">
              <div>
                <p className="card-text">{ ques_desc }</p>
              </div>
              <br/>
                <p className="card-text">
                  { ques_point } Point <i className="far fa-square"></i>
                </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  ques_title: PropTypes.string,
  user_id: PropTypes.number,
  category_id: PropTypes.string,
  post_date: PropTypes.string,
  modify_date: PropTypes.string,
  ques_desc: PropTypes.string,
  ques_point: PropTypes.number,
  head_img: PropTypes.string,
  who_chosen: PropTypes.number,
  vote_count: PropTypes.number,
};

export default Question;