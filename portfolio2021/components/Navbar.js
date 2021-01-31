import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import Head from "next/head";
import { motion } from "framer-motion";

const NavBar = styled.nav`
  padding: 30px;
`;

const NavButton = styled.div`
  color: ${(props) => (props.menu ? "black" : "white")};
  z-index: 4;
  color: #777070eb;
  z-index: 4;
  margin-right: 30px;
  font-size: 20px;
  padding: 10px;
  font-weight: 900;
  font-family: RobotoReg;
  letter-spacing: 4px;
  @media (max-width: 600px) {
    font-size: 18px;
    margin-right: 0px;
  }
`;

const BrandText = styled.a`
  font-weight: 800;
  font-size: 32px;
  font-family: RobotoReg;
  letter-spacing: 5px;
  margin-left: 30px;
  @media  (max-width: 600px) {
    font-size: 20px;
    margin-left:0px;
  }
`;

const IconContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 10%;
  @media screen and (max-width: 600px) {
    margin-top: 25%;
  }
`;

const Icon = styled.i`
  font-size: 30px;
  color: white;
`;

const LinkText = styled.a`
      pointer-events: ${(props) => (props.active ? "none;" : "")};  
      margin-bottom: 40px;
      position: relative;
      text-decoration: none;
      color: white;
      font-weight: 900;
      font-size: 20px;
      font-family: RobotoReg;
      letter-spacing: 4px;
      &:hover {
        transition: 0.3s;
        font-size: 23px;
        font-weight: 900;
        color: white;
      },
`;

const Overlay = styled.div`
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  background-color: #202329f5;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: 0.15s ease-in;
`;

const OverlayContent = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const LinkTextDesktop = styled.div`
  pointer-events: ${(props) => (props.active ? "none;" : "")};
  font-weight: ${(props) => (props.active ? "600;" : "")};
  margin-bottom: 40px;
  position: relative;
  text-decoration: none;
  color: grey;
  margin-right: 40px;
  margin-top: 2.5rem;
  font-size: 20px;
  font-family: RobotoReg;
  letter-spacing: 4px;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);

    const route = this.props.router.pathname;
    this.state = {
      isDesktop: false,
      menu: true,
      url: route,
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };

    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1050 });
  }
  openMenu = () => {
    this.setState((prevState) => ({ menu: !prevState.menu }));

    if (this.state.menu == true) {
      const lsOutput = document.getElementById("myNav");
      lsOutput.style.height = "100%";
    } else {
      const lsOutput = document.getElementById("myNav");
      lsOutput.style.height = "0%";
    }
    return;
  };

  render() {
    console.log("this.state", this.state);
    return (
      <motion.div
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
          ></link>
        </Head>

        {this.state.isDesktop ? (
          <NavBar className="navbar navbar-light justify-content-between">
            <Link href="/">
              <BrandText className="navbar-brand">NORUZI WD.</BrandText>
            </Link>
            <div
              style={{
                display: "flex",
              }}
            >
              <Link href="/AboutMe" scroll={false}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkTextDesktop
                    active={this.state.url == "/AboutMe" ? true : false}
                  >
                    About
                  </LinkTextDesktop>
                </motion.div>
              </Link>

              <Link href="/Projects" scroll={false}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkTextDesktop
                    active={this.state.url == "/Projects" ? true : false}
                  >
                    Portfolio
                  </LinkTextDesktop>
                </motion.div>
              </Link>

              <Link href="/ContactMe" scroll={false}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkTextDesktop
                    active={this.state.url == "/ContactMe" ? true : false}
                  >
                    Contact
                  </LinkTextDesktop>
                </motion.div>
              </Link>
            </div>
          </NavBar>
        ) : (
          <>
            <NavBar className="navbar navbar-light justify-content-between">
              <Link href="/">
                <BrandText className="navbar-brand">NORUZI WD.</BrandText>
              </Link>

              <NavButton
                onClick={() => this.openMenu()}
                type="button"
                menu={this.state.menu}
              >
                {this.state.menu ? "Menu" : "Close"}
              </NavButton>
            </NavBar>

            <Overlay id="myNav">
              <OverlayContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "200px",
                  }}
                >
                  <Link href="/" scroll={false}>
                    <LinkText
                      active={this.state.url == "/" ? true : false}
                      onClick={() => {
                        this.openMenu();
                      }}
                      className="linkText"
                    >
                      {this.state.url == "/" ? "- Home - " : "Home"}
                    </LinkText>
                  </Link>
                  <Link href="/AboutMe" scroll={false}>
                    <LinkText
                      active={this.state.url == "/AboutMe" ? true : false}
                      onClick={() => {
                        this.openMenu();
                      }}
                      className="linkText"
                    >
                      {this.state.url == "/AboutMe" ? "- About - " : "About"}
                    </LinkText>
                  </Link>

                  <Link href="/Projects" scroll={false}>
                    <LinkText
                      active={this.state.url == "/Projects" ? true : false}
                      onClick={() => {
                        this.openMenu();
                      }}
                      className="linkText"
                    >
                      {this.state.url == "/Projects"
                        ? "- Portfolio - "
                        : "Portfolio"}
                    </LinkText>
                  </Link>

                  <Link href="/ContactMe" scroll={false}>
                    <LinkText
                      active={this.state.url == "/ContactMe" ? true : false}
                      onClick={() => {
                        this.openMenu();
                      }}
                      className="linkText"
                    >
                      {this.state.url == "/ContactMe"
                        ? "- Contact - "
                        : "Contact"}
                    </LinkText>
                  </Link>
                </div>

                <IconContainer>
                  <a
                    style={{ margin: "20px" }}
                    href="mailto:Shawn.Noruzi@gmail.com"
                  >
                    <Icon className="bi bi-envelope"></Icon>
                  </a>
                  <a style={{ margin: "20px" }} href="tel:604-704-5402">
                    <Icon className="bi bi-telephone"></Icon>
                  </a>
                  <a
                    style={{ margin: "20px" }}
                    href="https://www.linkedin.com/in/shawn-noruzi/"
                  >
                    <Icon className="bi bi-linkedin"></Icon>
                  </a>
                  <a
                    style={{ margin: "20px" }}
                    href="https://github.com/Shawn-Noruzi"
                  >
                    <Icon className="bi bi-github"></Icon>
                  </a>
                </IconContainer>
              </OverlayContent>
            </Overlay>
          </>
        )}
      </motion.div>
    );
  }
}

export default withRouter(Navbar);
