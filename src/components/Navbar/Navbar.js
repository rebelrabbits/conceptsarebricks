import React, { useState } from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../../img/logo.svg";
import { Container } from "../styles";
import Button from "../Button";
import {
  Header,
  MobileNav,
  NavContainer,
  SiteBranding,
  Nav,
  Hamburger,
  MobileMenu,
} from "./styles";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Header>
      <Container>
        <NavContainer>
          <SiteBranding>
            <Link to='/' title='Logo'>
              Concepts are Bricks
            </Link>
          </SiteBranding>
          <Nav>
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/profile'>Profiles</Link>
              </li>
              <li>
                <Link to='/incident'>Incidents</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/contact'>
                  <Button variant='primary'>Contact</Button>
                </Link>
              </li>
            </ul>
          </Nav>
          <MobileNav>
            <Hamburger
              onClick={() => setIsActive((prev) => !prev)}
              isActive={isActive}
            >
              <span />
              <span />
              <span />
            </Hamburger>
          </MobileNav>
          <MobileMenu out={!isActive}>
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/profile'>Profiles</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Button variant='transparentW'>
                  <Link to='/contact'>Contact</Link>
                </Button>
              </li>
            </ul>
          </MobileMenu>
        </NavContainer>
      </Container>
    </Header>
  );

  //   return (
  //     <nav
  //       className="navbar is-transparent"
  //       role="navigation"
  //       aria-label="main-navigation"
  //     >
  //       <div className="container">
  //         <div className="navbar-brand">
  //           <Link to="/" className="navbar-item" title="Logo">
  //             <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
  //           </Link>
  //           {/* Hamburger menu */}
  //           <div
  //             className={`navbar-burger burger ${this.state.navBarActiveClass}`}
  //             data-target="navMenu"
  //             onClick={() => this.toggleHamburger()}
  //           >
  //             <span />
  //             <span />
  //             <span />
  //           </div>
  //         </div>
  //         <div
  //           id="navMenu"
  //           className={`navbar-menu ${this.state.navBarActiveClass}`}
  //         >
  //           <div className="navbar-start has-text-centered">
  //             <Link className="navbar-item" to="/about">
  //               About
  //             </Link>
  //             <Link className="navbar-item" to="/products">
  //               Products
  //             </Link>
  //             <Link className="navbar-item" to="/blog">
  //               Blog
  //             </Link>
  //             <Link className="navbar-item" to="/contact">
  //               Contact
  //             </Link>
  //             <Link className="navbar-item" to="/contact/examples">
  //               Form Examples
  //             </Link>
  //           </div>
  //           <div className="navbar-end has-text-centered">
  //             <a
  //               className="navbar-item"
  //               href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
  //               target="_blank"
  //               rel="noopener noreferrer"
  //             >
  //               <span className="icon">
  //                 <img src={github} alt="Github" />
  //               </span>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   );
};

export default Navbar;
