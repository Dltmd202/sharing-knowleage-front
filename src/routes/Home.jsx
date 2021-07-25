import React from "react";
import axios from "axios";
import Navigation from "../components/home/Navigation.jsx"
import "./Home.css";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isMain: true,
        }
    }
    render() {
        return (
          <div>
              <Navigation/>
            <div className="main-page">
            <section className="KnowSharing" id="home">
                <div className="textBx">
                    <h2>likelion<br/><span>OG-LAB</span></h2>
                    <h3>지식 나눔 사이트</h3>
                </div>
            </section>
            <section className="질문자" id="ask">
                <div className="ask">
                    <h2>궁금한 내용 질문하기</h2>
                </div>
                <div className="content">
                    <div className="contentBx w50">
                        <br/>
                            <h3>어떻게 질문하나요?</h3>
                            <p>먼저 회원가입을 하고 질문자로 등록을 합니다. 아래의 버튼을 눌러 질문하러 갑시다~!<br/><br/>
                                <button className="btn" type="button">질문하러가기</button>
                                <br/><br/><br/><br/></p>
                            <h3>질문자이지만 답변도 할 수 있나요?</h3>
                            <p>당연하죠! 회원가입에서 답변자의 자격으로 등록하거나, 아래의 질문자 도와주기 부분을 참고하세요! </p>
                    </div>
                    <div className="w50">
                        <div className="img"></div>
                    </div>
                </div>
            </section>
            <section className="답변자" id="answer">
                <div className="answer">
                    <h2>질문자 도와주기</h2>
                </div>
                <div className="content">
                    <div className="w51">
                        <div className='img1'></div>
                    </div>
                    <div className="contentBx1 w51">
                        <br/><br/><br/>
                            <h3>어떻게 돕나요?</h3>
                            <p>먼저 회원가입을 하고 답변자로 등록을 합니다. 등록시에는 별도의 인증절차가 있습니다.<br/><br/><br/><br/></p>
                            <h3>도우면 좋은점이 있나요?</h3>
                            <p>물론입니다! 질문에 성실히 답변을 하면 KnowSharing에서 코인을 지급하는데, 일정수준의 코인이 모이면 돈으로 환전 가능합니다 </p>
                    </div>
                </div>
            </section>
            </div>
          </div>
        )
    }
}

export default Home;