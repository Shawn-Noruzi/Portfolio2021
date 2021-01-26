import React, {Component} from 'react';
import Navbar from "../components/Navbar"
import Link from 'next/link';
import { Container, Row, Col } from "reactstrap";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { BsBootstrap } from "react-icons/bs"


const TitleText = styled.p`
  font-size: calc(20px + (20-16) * ((100vw - 320px) / (1600-300)));
  font-family: RobotoBold;
  margin-bottom: 20px;
  margin-top: 50px;
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
  letter-spacing:2px;
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
    render(){

        return(
            <div>
                <Navbar/>
                <TitleText>My Skills</TitleText>
                <BsBootstrap className={css`font-size:40px`}/>
            </div>
        );

    }

}