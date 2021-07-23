import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggled: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.searchQuestion = this.searchQuestion.bind(this);
    }

    toggleMenu(){
        console.log('fuck');
        var menuToggle = document.querySelector('.toggle');
        console.log(menuToggle.id);
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
    }

    componentDidMount(){
        window.addEventListener("scroll", function(){
            var header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        })
    }
    searchQuestion(){

    }

    render() {
        return (
            <header className="header">
                <a href="/" className="logo">og-lab</a>
                <div className="toggle" onClick={this.toggleMenu}/>
                <ul className="menu pt-4">
                    <li className="mx-1 py-auto">
                        <input className="form-control" id="search-input" type="search"
                               placeholder="Search" aria-label="Search"/>
                    </li>
                    <li>
                        <button className="button search-button me-3" onClick={this.searchQuestion}>검색</button>
                    </li>
                    <div className="d-flex my-auto">
                        <li><a href="#" onClick={this.toggleMenu}>로그인</a></li>
                        <li><a href="#" onClick={this.toggleMenu}>회원가입</a></li>
                    </div>
                </ul>
            </header>
        )
    }
}


export default Navigation;