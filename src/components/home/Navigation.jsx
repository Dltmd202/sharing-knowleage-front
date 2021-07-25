import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {
    constructor(props){
        super(props);
        //초기 state
        this.state = {
            // 현재 페이지가 대문페이지인지 판단함
            isMain: false,
            IsLogin: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.searchQuestion = this.searchQuestion.bind(this);
    }

    // 검색 함수
    // 미작성
    searchQuestion(){

    }

    // 네이게이션바 토글 함수
    toggleMenu(){
        var menuToggle = document.querySelector('.toggle');
        // console.log(menuToggle.id);
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
    }

    componentDidMount(){
        console.log("header mounted")
        window.addEventListener("scroll", function(){
            var header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        })
        var main_page = document.querySelector(".main-page");
        // console.log(main_page)
        if (main_page) {
            console.log("main_page appear");
            this.setState({ isMain: true });
        }
    }

    render() {
        console.log("render header()")
        console.log(this.state.isMain)
        return (
            <header
              className={this.state.isMain ? "header__main" : "header__not-main"}>
                <a href="/" className="logo">og-lab</a>
                <div className="toggle" onClick={this.toggleMenu}/>
                <ul className="menu pt-4">
                    <li className="mx-1 py-auto">
                        <input className="form-control" id="search-input"
                               type="search"
                               placeholder="Search" aria-label="Search"/>
                    </li>
                    <li>
                        <button className="button search-button me-3"
                                onClick={this.searchQuestion}>검색</button>
                    </li>
                    <div className="d-flex my-auto">
                        <li><Link to="/question">질문</Link></li>
                        <li><a href="#" onClick={this.toggleMenu}>로그인</a></li>
                        <li><a href="#" onClick={this.toggleMenu}>회원가입</a></li>
                    </div>
                </ul>
            </header>
        )
    }
}


export default Navigation;