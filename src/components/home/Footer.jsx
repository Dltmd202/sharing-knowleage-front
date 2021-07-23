import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {

  render() {
    return (
      <div>
        <section className='grass'></section>
        <section className='black'>
          <footer id='footer' className='black'>
            <div align='left'>
              <div className='footer-div'>
                <p className='m-0 footer-text footer-logo'>OG-LAB</p>
              </div>
              <div className='footer-div'>
                <p className='footer-text m-0'>궁금한 점을 문의해보세요.</p>
              </div>
              <div className='footer-div'>
                <p className='footer-text m-0'>dltmd202@gmail.com</p>
                <p className='footer-text m-0'>patkim97@gmail.com</p>
                <p className='footer-text m-0'>cogh7828@naver.com</p>
                <p className='footer-text m-0'>yeheun004@gmail.com</p>
              </div>
              <div className='footer-div'>
                <p className='footer-text'>충청남도 천안시 동남구 병천면
                  <br />충절로 1600
                  <br />+82 010 3706 5337</p>
              </div>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}


export default Footer;