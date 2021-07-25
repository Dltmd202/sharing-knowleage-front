import React from "react";
import QuestionList from './QuestionList';
import Navigation from "../home/Navigation.jsx"
import {HashRouter, Route} from "react-router-dom";
import QuestionDetail from './QuestionDetail';
import './QuestionBase.css';

function QuestionBase(props){
  console.log(props);
  return(
    <div>
      <Navigation/>
      <div className="background">
        <div className="container">
          <div className="row" id="main-container">
            <div className="col-md-8 col-lg-9" id="main-area">
              <HashRouter>
                <Route path="question/" component={QuestionList}/>
                <Route path="question/:id" exact={true} component={QuestionDetail}/>
              </HashRouter>
              <QuestionList/>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="side_banner">
                <div className="row profile">
                  <div className="col-3">
                    <img className="d-flex mr-3 rounded-circle"
                       src="https://dummyimage.com/50x50/dee2e6/6c757d.jpg"
                         alt="" width="50px"/>
                  </div>
                  <div className="col-7">
                    <p>1</p>
                    <a href="#" className="">마이페이지></a>
                  </div>
                  <div className="px-5">
                    <hr/>
                  </div>
                  <div className="px-1">
                    <ul className="point_ul">
                      <li>
                        <p className="user-status">질문 포인트 | 1000 Point</p>
                      </li>
                      <li>
                        <p className="user-status">답변 포인트 | 2000 Point</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="side_banner my-4" id="categories-card">
                <div className="category">
                  <h5>카테고리</h5>
                  <div className="card-body row">
                    <ul className="category__ul mb-0">
                      <li>
                        <a href="#" className="category-list">- 수학 </a>
                      </li>
                      <li>
                        <a href="#" className="category-list">- 미분류(2) </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionBase;