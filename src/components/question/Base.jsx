import React from "react";
import QuestionList from './QuestionList';

function Base(props){
  console.log(props);
  return(
      <div className="container " id="main-container">
        <div className="row">
          <div className="col-md-8 col-lg-9" id="main-area">
            <QuestionList/>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="custom-contentview">
              <div className="row">
                <div className="col-3 mx-2">
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
                  <ul className="ul-user-status">
                    <li>
                      <p className="user-status">질문 포인트 | 1000 Point</p>
                    </li>
                    <li>
                      <p className="user-status">답변 포인트 | 2000 Point</p>
                    </li>
                  </ul>
                </div>
                <div className="col-3 mx-2">
                  <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                </div>
                <div className="col-7">
                  <div className="row">
                    <a href="#" >로그인</a>
                  </div>
                  <a href="#" className="my-page">마이페이지></a>
                </div>
              </div>
            </div>
            <div className="custom-contentview my-4" id="categories-card">
              <h5>카테고리</h5>
              <div className="card-body">
                <div className="row">
                  <ul className="list-unstyled mb-0">
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
  );
}

export default Base;