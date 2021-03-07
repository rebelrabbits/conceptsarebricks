import React from "react";
import { Link } from "gatsby";

// import logo from "../../img/logo.svg";
import Facebook from "../../assets/svg/social/facebook.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Twitter from "../../assets/svg/social/twitter.svg";
import Vimeo from "../../assets/svg/social/vimeo.svg";
import { Container, TwoCol } from "../styles";
import {
  Footer,
  Top,
  Bottom,
  BottomContainer,
  Branding,
  Menu,
  Social,
} from "./styles";

const FooterComponent = class extends React.Component {
  render() {
    return (
      <Footer>
        <Top>
          <Container>
            <TwoCol>
              <div>
                <Branding>Concepts are Bricks</Branding>
                <Social>
                  <ul>
                    <li>
                      <a
                        title='facebook'
                        href='https://facebook.com'
                        className='facebook'
                      >
                        <Facebook />
                      </a>
                    </li>
                    <li>
                      <a title='twitter' href='https://twitter.com'>
                        <Twitter />
                      </a>
                    </li>
                    <li>
                      <a title='instagram' href='https://instagram.com'>
                        <Instagram />
                      </a>
                    </li>
                    <li>
                      <a title='vimeo' href='https://vimeo.com'>
                        <Vimeo />
                      </a>
                    </li>
                  </ul>
                </Social>
              </div>
              <Menu>
                <div>
                  <h4>Content</h4>
                  <nav>
                    <ul>
                      <li>
                        <Link to='/profile'>Profiles</Link>
                      </li>
                      <li>
                        <Link to='/incident'>Incidents</Link>
                      </li>
                      <li>
                        <Link to='/blog'>Latest Posts</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <h4>About</h4>
                  <nav>
                    <ul>
                      <li>
                        <Link to='/about'>About Rebel Rabbits</Link>
                      </li>
                      <li>
                        <Link to='/mission'>Mission Statement</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <h4>Get in touch</h4>
                  <nav>
                    <ul>
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Menu>
            </TwoCol>
          </Container>
        </Top>
        <Bottom>
          <BottomContainer>
            <p>
              Copyright &#169; {new Date().getFullYear()} Concepts are Bricks
            </p>
            <p>
              <b>
                <Link to='/disclaimer'>Disclaimer</Link>
              </b>
              <b>
                <Link to='/privacy'>Privacy Policy</Link>
              </b>
            </p>
          </BottomContainer>
        </Bottom>
      </Footer>
    );
  }
};

export default FooterComponent;
