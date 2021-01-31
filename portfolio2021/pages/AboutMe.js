import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { motion } from "framer-motion";

const TitleText = styled.p`
  font-size: calc(20px + (20-16) * ((100vw - 320px) / (1600-300)));
  font-family: RobotoThin;
  margin-bottom: 20px;
  margin-top: 10px;
  font-weight: 500;
  letter-spacing: 6px;
  @media screen and (max-width: 575px) {
    margin-bottom: 0px;
  }
`;

const SubTitleText = styled.p`
  margin-top: 100px;
  font-size: 22px;
  font-family: RobotoBold;
  letter-spacing: 2px;
  @media screen and (max-width: 575px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 530px) {
    margin-top: 20px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-family: RobotoReg;
  @media screen and (max-width: 770px) {
    font-size: 14px;
  }
`;

const Divider = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  border-bottom: solid 2px grey;
  @media screen and (max-width: 800px) {
  }
`;

export default class pages extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col>
              <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {" "}
                <TitleText> About Me</TitleText>
              </motion.div>
            </Col>
          </Row>

          <Row>
            <Col sm={6} md={6} lg={{ size: "4", offset: 2 }}>
              <div
                className={css`
                  margin-left: 10px;
                  @media screen and (max-width: 700px) {
                    margin-left: none;
                  }
                  @media screen and (max-width: 575px) {
                    margin-bottom: 50px;
                  }
                `}
              >
                <motion.div
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {" "}
                  <SubTitleText>Experience </SubTitleText>
                  <Text>
                    I studied Computer Science and Mathematics at Simon Fraser
                    University and have worked on multiple projects specializing
                    in front-end skill development. I've created a bounty web
                    app for developers to find gig work, a constituent
                    consulting app utilizing geolocalization, and an app
                    connecting developers with mentors in the field to name a
                    few.
                  </Text>
                </motion.div>
              </div>
            </Col>
            <Col
              className={css`
                @media screen and (max-width: 575px) {
                  margin: 0 auto;
                }
              `}
              xs={{ size: "10" }}
              sm={{ size: "4" }}
              md={5}
              lg={{ size: "4", offset: "1" }}
            >
              <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {" "}
                <img
                  className={css`
                    border-radius: 10px;
                    box-shadow: 10px 10px 5px #ccc;
                    transition: 1s;
                    &:hover {
                      box-shadow: 10px 10px 5px #868686;
                      position: relative;
                      top: -2px;
                      left: -2px;
                    }
                    @media screen and (max-width: 770px) {
                      width: 270px;
                      height: 470px;
                    }

                    @media screen and (max-width: 575px) {
                      width: 100%;
                      height: 100%;
                    }
                  `}
                  src="/images/study.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={500}
                />{" "}
              </motion.div>
            </Col>
          </Row>

          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Divider />
          </motion.div>

          <Row>
            <Col
              className={css`
                @media screen and (max-width: 575px) {
                  margin: 0 auto;
                }
              `}
              xs={{ size: "10" }}
              sm={{ size: "6" }}
              md={5}
              lg={{ size: "4", offset: "2" }}
            >
              <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <img
                  className={css`
                    border-radius: 10px;
                    box-shadow: 10px 10px 5px #ccc;
                    transition: 1s;
                    &:hover {
                      box-shadow: 10px 10px 5px #868686;
                      position: relative;
                      top: -2px;
                      left: -2px;
                    }
                    @media screen and (max-width: 770px) {
                      width: 270px;
                      height: 470px;
                    }

                    @media screen and (max-width: 575px) {
                      width: 100%;
                      height: 100%;
                      display: none;
                    }
                  `}
                  src="/images/website.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={500}
                />
              </motion.div>
            </Col>
            <Col sm={6} md={6} lg={{ size: "4", offset: 1 }}>
              <div
                className={css`
                  margin-left: 20px;
                  @media screen and (max-width: 700px) {
                    margin-left: none;
                  }
                  @media screen and (max-width: 575px) {
                    margin-bottom: 50px;
                  }
                `}
              >
                <motion.div
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SubTitleText>Mission </SubTitleText>
                  <Text>
                    To effectively collaborate with my clients and their needs
                    by bringing my expertise of combining contemporary high-end
                    web design and engineering to create impactful branding and
                    exceptional products.
                  </Text>
                </motion.div>
              </div>
            </Col>
            <Col
              className={css`
                @media screen and (max-width: 575px) {
                  margin: 0 auto;
                }
              `}
              xs={{ size: "10" }}
              sm={{ size: "4" }}
              md={5}
              lg={{ size: "4", offset: "2" }}
            >
              <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {" "}
                <img
                  className={css`
                    border-radius: 10px;
                    box-shadow: 10px 10px 5px #ccc;
                    transition: 1s;
                    display: none;
                    &:hover {
                      box-shadow: 10px 10px 5px #868686;
                      position: relative;
                      top: -2px;
                      left: -2px;
                    }
                    @media screen and (max-width: 770px) {
                      width: 270px;
                      height: 470px;
                    }

                    @media screen and (max-width: 575px) {
                      width: 100%;
                      height: 100%;
                      display: unset;
                    }
                  `}
                  src="/images/website.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={500}
                />
              </motion.div>
            </Col>
          </Row>
          <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >          <Divider /></motion.div>
          <Row>
            <Col sm={6} md={6} lg={{ size: "4", offset: 2 }}>
              <div
                className={css`
                  margin-left: 10px;
                  @media screen and (max-width: 700px) {
                    margin-left: none;
                  }
                  @media screen and (max-width: 575px) {
                    margin-bottom: 50px;
                  }
                `}
              >
                <motion.div
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                ></motion.div>
                <SubTitleText>Fun Facts </SubTitleText>
                <Text>
                  I was educated and raised in British Columbia, Canada. My
                  partner in crime is my pet cat Oscar. I enjoy
                  teaching others front end skills or mathematics - I like to
                  help people level up and see their growth in real time. I also
                  enjoy competitive gaming, rugby or taking time to perfect the
                  greatest gourmet mac and cheese recipe known to man-kind (a
                  work in progress).
                </Text>
              </div>
            </Col>

            <Col
              className={css`
                @media screen and (max-width: 575px) {
                  margin: 0 auto;
                }
              `}
              xs={{ size: "10" }}
              sm={{ size: "4" }}
              md={5}
              lg={{ size: "4", offset: "1" }}
            >
              <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <img
                  className={css`
                    border-radius: 10px;
                    box-shadow: 10px 10px 5px #ccc;
                    transition: 1s;
                    &:hover {
                      box-shadow: 10px 10px 5px #868686;
                      position: relative;
                      top: -2px;
                      left: -2px;
                    }
                    @media screen and (max-width: 770px) {
                      width: 270px;
                      height: 470px;
                    }

                    @media screen and (max-width: 575px) {
                      width: 100%;
                      height: 100%;
                    }
                  `}
                  src="/images/cheese.jpg"
                  alt="Picture of the author"
                  width={300}
                  height={500}
                />
              </motion.div>
            </Col>
          </Row>

          <div
            className={css`
              height: 50px;
            `}
          />
          <Link href="/Projects">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">View My Projects</span>
            </button>
          </Link>

          <div
            className={css`
              height: 50px;
            `}
          />
        </Container>
      </div>
    );
  }
}
