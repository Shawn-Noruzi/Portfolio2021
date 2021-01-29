import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

//Landing Page
const BgText = styled.p`
  position: absolute;
  top: 25%;
  text-shadow: 2px 2px #fffffffc;
  color: #c5c5c51f;
  font-size: calc(50px + (150-100) * ((100vw - 320px) / (1600-300)));
  z-index: -1;
  letter-spacing: 10px;
  width: 100%;
  text-align: center;
  font-family: RobotoReg;

  @media screen and (max-width: 800px) {
    margin-top: 100px;
    width: 400px;
    overflow: hidden;
    transform: rotate(90deg);
    font-size: 180px;
  }
`;

const NameText = styled.p`
  font-size: 46px;
  font-weight: 800;
  font-family: RobotoReg;
  color: blue;
  margin-left: 15px;
  letter-spacing: 2px;
  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`;

const Text = styled.p`
  color: black;
  font-family: RobotoReg;
  font-size: 46px;
  font-weight: 800;
  letter-spacing: 2px;
  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`;

const LinkedText = styled.p`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
transform: scale(1.1);
  font-family: RobotoReg;
  &:hover {
        transition: 0.2s;
        font-size: 18.5px;
        font-weight: 700;
      },
`;

const SpacerText = styled.p`
  font-size: 18px;
  color: grey;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (max-width: 400px) {
    margin-left: 40px;
  }
`;

const LinksRow = styled(Row)`
  @media screen and (max-width: 400px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: start;
  }
`;

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Shawn Noruzi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <BgText>DEVELOPER</BgText>

      <Container
        className={css`
          margin-top: 100px;
          padding-left: 40px;
        `}
      >
        <Row>
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>Hello! </Text>
          </motion.div>
        </Row>
        <Row>
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>I'm </Text>
          </motion.div>
          <motion.div
            transition={{ duration: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <NameText>Shayan,</NameText>
          </motion.div>
        </Row>
        <Row>
          <motion.div
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>I build responsive and modern websites.</Text>
          </motion.div>
        </Row>

        <LinksRow>
          <Link href="/AboutMe">
            <motion.div
              transition={{ duration: 3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <LinkedText>Read about me</LinkedText>
            </motion.div>
          </Link>
          <SpacerText> - </SpacerText>
          <Link href="/Projects">
            <motion.div
              transition={{ duration: 4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <LinkedText>See my work</LinkedText>
            </motion.div>
          </Link>
          <SpacerText> - </SpacerText>
          <Link href="/ContactMe">
            <motion.div
              transition={{ duration: 4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <LinkedText>Contact me</LinkedText>
            </motion.div>
          </Link>
        </LinksRow>
      </Container>
    </React.Fragment>
  );
}
