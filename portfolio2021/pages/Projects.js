import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { BsBootstrap } from "react-icons/bs";
import { SiMaterialUi } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { MdWebAsset } from "react-icons/md";
import { motion } from "framer-motion";
import Head from "next/head";

const TitleText = styled.p`
  font-size: 32px;
  font-family: RobotoThin;
  margin-bottom: 20px;
  margin-top: 10px;
  font-weight: 500;
  letter-spacing: 6px;
  @media screen and (max-width: 575px) {
    margin-left: 20px;
  }
`;

const SubTitleText = styled.p`
  margin-top: 20px;
  font-size: 22px;
  font-family: RobotoBold;
  letter-spacing: 2px;
  margin: 0 auto;
  text-align: center;
  width: 80%;
  @media screen and (max-width: 575px) {
    margin-top: 20px;
    font-size: 16px;
    width: 90%;
  }
`;

const CardText = styled.p`
  font-size: 22px;
  font-family: RobotoBold;
  letter-spacing: 2px;
  width: 80%;
  @media screen and (max-width: 575px) {
    margin-top: 20px;
    font-size: 16px;
    width: 90%;
  }
`;

const TechText = styled.p`
  font-size: 16px;
  font-family: "RobotoBold";
  color: #8a8a8a;
`;
const Text = styled.p`
  font-size: 18px;
  font-family: RobotoReg;
  margin-left: 6px;
  color: #7292cc;
  @media screen and (max-width: 770px) {
    font-size: 14px;
  }
`;

const Divider = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default class pages extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>My Projects</title>
          <meta
            name="Description"
            content=""
          ></meta>
        </Head>
        <Navbar />
        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Container>
            <Row>
              <TitleText>My Skills</TitleText>
            </Row>
            <Row>
              <SubTitleText>
                React / Redux / JavaScript / HTML5 / Next.js / TypeScript /
                Node.js / MongoDB / Firebase / GraphQL / Bootstrap / Material-UI
                / CSS3 / SASS
              </SubTitleText>
            </Row>
          </Container>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <Container>
            <Row
              className={css`
                margin-top: 50px;
              `}
            >
              <Col
                lg={{ size: "6", offset: 3 }}
                className={css`
                  text-align: center;
                `}
              >
                <SiReact className="icons" />
                <SiRedux className="icons" />
                <SiJavascript className="icons" />
                <AiFillHtml5 className="icons" />
                <SiNextDotJs className="icons" />
                <SiTypescript className="icons" />
                <FaNodeJs className="icons" />
                <SiFirebase className="icons" />
                <SiMongodb className="icons" />
                <SiGraphql className="icons" />
                <BsBootstrap className="icons" />
                <SiMaterialUi className="icons" />
                <SiCss3 className="icons" />
                <SiSass className="icons" />
              </Col>
            </Row>
          </Container>
        </motion.div>

        <Container>
          <Row
            className={css`
              margin-top: 50px;
            `}
          >
            <Col></Col>
          </Row>
        </Container>
        <Divider />

        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Container>
            <Row>
              <TitleText>Recent Projects</TitleText>
            </Row>
            <Row
              className={css`
                margin: 0px;
              `}
            >
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img
                      src="/images/placespeak.PNG"
                      className="card-img"
                      alt="placespeak"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <CardText>PlaceSpeak</CardText>
                      <p className="card-text">
                        In 2019 I was hired as a contractor for PlaceSpeak as a
                        Front End Engineer. I worked alongside a back end
                        developer while in close communications with the design
                        team, clients and management to meet weekly
                        deliverables. I was tasked with modernizing the UX/UI
                        based on mock ups, testing, documenting and fixing
                        technical issues.
                      </p>
                      <Row>
                        <Col>
                          <TechText>
                            React, Redux, CSS, Bootstrap, JQuery
                          </TechText>
                        </Col>
                      </Row>
                      <Row>
                        <Row
                          className={css`
                            margin: 10px;
                          `}
                        >
                          <MdWebAsset
                            className={css`
                              font-size: 25px;
                              color: #7292cc;
                            `}
                          />
                          <Text>
                            <Link href="https://placespeak.com/">
                              View Site
                            </Link>
                          </Text>
                        </Row>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>

              <Divider />
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img
                      src="/images/gitpay.PNG"
                      className="card-img"
                      alt="gitpay"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <CardText>GitPay</CardText>
                      <p className="card-text">
                        In 2020 I worked on 'bounties' for the site GitPay and
                        was later hired as a consultant and Front End Engineer.
                        I was tasked with modernizing the UX/UI based on mock
                        ups, testing, documenting, fixing technical issues while
                        providing support to other developers.
                      </p>
                      <Row>
                        <Col>
                          <TechText>
                            React, Redux, CSS, Bootstrap, Webpack
                          </TechText>
                        </Col>
                      </Row>
                      <Row>
                        <Row
                          className={css`
                            margin: 10px;
                          `}
                        >
                          <MdWebAsset
                            className={css`
                              font-size: 25px;
                              color: #7292cc;
                            `}
                          />
                          <Text>
                            <Link href="https://gitpay.me/#/">View Site</Link>
                          </Text>
                        </Row>
                        <Row
                          className={css`
                            margin: 10px;
                          `}
                        >
                          <VscGithub
                            className={css`
                              font-size: 25px;
                              color: #7292cc;
                            `}
                          />
                          <Text>
                            <Link href="https://github.com/worknenjoy/gitpay">
                              Github
                            </Link>
                          </Text>
                        </Row>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>

              <Divider />
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img
                      src="/images/mentorship.PNG"
                      className="card-img"
                      alt="mentorship"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <CardText>OpenMentorship</CardText>
                      <p className="card-text">
                        In early 2020 I joined a start up open source project
                        with 4 others to create a Tinder-like matching app for
                        software developers. The goal is to create meaningful
                        connections between people starting out and those deep
                        in the industry. As a Front End Engineer I oversaw
                        development at all stages of the product life cycle and
                        created most of the front end for the project.
                      </p>
                      <Row>
                        <Col>
                          <TechText>
                            React, Styled-Components, Material-UI, Axios
                          </TechText>
                        </Col>
                      </Row>
                      <Row>
                        <Row
                          className={css`
                            margin: 10px;
                          `}
                        >
                          <MdWebAsset
                            className={css`
                              font-size: 25px;
                              color: #7292cc;
                            `}
                          />
                          <Text>
                            <Link href="https://openmentorship.com/">
                              View Site
                            </Link>
                          </Text>
                        </Row>
                        <Row
                          className={css`
                            margin: 10px;
                          `}
                        >
                          <VscGithub
                            className={css`
                              font-size: 25px;
                              color: #7292cc;
                            `}
                          />
                          <Text>
                            <Link href="https://github.com/nikhil-g777/openmentorship">
                              Github
                            </Link>
                          </Text>
                        </Row>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img
                      src="/images/portfolio.PNG"
                      className="card-img"
                      alt="portfolio"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <CardText>Portfolio</CardText>
                      <p className="card-text">
                        My 2nd iteration on a portfolio. I wanted to create a
                        more conventional website compared to my slider
                        portfolio while also picking up a few new skills -
                        mainly next.js and typescript. I focused on creating a
                        responsive, statically typed, easy to navigate, and
                        consume site that would utilize a single source of truth
                        for its data to create many components.
                      </p>
                      <Row>
                        <Col>
                          <TechText>
                            React, Next.js, CSS, TypeScript, Material-UI, SWR
                          </TechText>
                        </Col>
                      </Row>
                      <Row>
                        <Row
                          className={css`
                            margin: 10px;
                          `}
                        >
                          <MdWebAsset
                            className={css`
                              font-size: 25px;
                              color: #7292cc;
                            `}
                          />
                          <Text>
                            <Link href="https://noruzi2020.vercel.app/">
                              View Site
                            </Link>
                          </Text>
                        </Row>
                        <Row
                          className={css`
                            margin: 10px;
                          `}
                        >
                          <VscGithub
                            className={css`
                              font-size: 25px;
                              color: #7292cc;
                            `}
                          />
                          <Text>
                            <Link href="https://github.com/Shawn-Noruzi/PortfolioShawnNoruzi">
                              Github
                            </Link>
                          </Text>
                        </Row>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Row>

            <div
              className={css`
                height: 50px;
              `}
            />
            <Link href="/ContactMe">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Contact Me</span>
              </button>
            </Link>

            <div
              className={css`
                height: 50px;
              `}
            />
          </Container>
        </motion.div>
      </div>
    );
  }
}
