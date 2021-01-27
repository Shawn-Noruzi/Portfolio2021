import React, { Component } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "reactstrap";
import styled from "@emotion/styled";
import { FiGithub, FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { css } from "@emotion/css";
import { SiLinkedin } from "react-icons/si";
import Swal from "sweetalert2";

const TitleText = styled.p`
  font-size: calc(20px + (20-16) * ((100vw - 320px) / (1600-300)));
  font-family: RobotoThin;
  margin-bottom: 20px;
  margin-top: 50px;
  font-weight: 500;
  letter-spacing: 6px;
  @media screen and (max-width: 575px) {
    margin-bottom: 0px;
  }
`;

const SubTitleText = styled.p`
  margin-top: 20px;
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

const RadioContainer = styled.div`
    padding: 10px 10px 0px 10px;
    display: flex;
    margin-left: 20px;
  }
`;

const FormText = styled.p`
  color: white;
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 16px;
  font-family: RobotoReg;
  @media screen and (max-width: 770px) {
    font-size: 14px;
  }
`;

const RadioText = styled.label`
  color: rgba(255, 255, 255, 0.6);
  margin-left: 15px;
  font-size: 16px;
  font-family: RobotoReg;
  @media screen and (max-width: 770px) {
    font-size: 14px;
  }
`;

const Icon = styled.i`
  font-size: 30px;
  color: white;
`;

export default class pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      firstname: "",
      lastname: "",
      email: "",
      msg: "",
      radio: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  //onSubmit of email form
  handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "template_50281sf";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
      msg: this.state.msg,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      radio: this.state.radio,
    });
  };

  //Custom EmailJS method
  sendFeedback = (templateId, variables) => {
    emailjs
      .send(
        "service_1d8asjm",
        templateId,
        variables,
        "user_1lYGDmBE8NDWjEU26F6GK"
      )
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
    console.log("this.state", this.state);
    this.setState({
      firstname: "",
      lastname: "",
      msg: "",
      email: "",
      radio: "",
      sent: true,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <TitleText>CONTACT ME</TitleText>
          <SubTitleText>
            Got a question, suggestion or work opportunity? Shoot me an email.
          </SubTitleText>
        </Container>

        <Container
          className={css`
            max-width: none;
            margin-top: 50px;
            margin-bottom: 100px;
            background-size: cover;
            padding: 70px;
            background-blend-mode: screen;
            background-image: linear-gradient(black, black),
              url(https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
          `}
        >
          <Container>
            <Row>
              <Col
                className={css`
                  background-color: white;

                  border-top-left-radius: 25px;
                  border-bottom-left-radius: 25px;
                `}
                lg={5}
              >
                <Container>
                  <SubTitleText>Contact Info</SubTitleText>
                  <Text>Estimated Response time is within 24 hours.</Text>

                  <Container
                    className={css`
                      margin-top: 10%;
                    `}
                  >
                    <a href="mailto:Shawn.Noruzi@gmail.com">
                      <Row>
                        <AiOutlineMail
                          className={css`
                            font-size: 30px;
                            margin-right: 23px;
                            margin-bottom: 40px;
                            margin-left: 10px;
                          `}
                        />
                        <Text>shawn.noruzi@gmail.com</Text>
                      </Row>
                    </a>

                    <a href="tel:604-704-5402">
                      <Row>
                        <FiPhoneCall
                          className={css`
                            font-size: 30px;
                            margin-right: 23px;
                            margin-bottom: 40px;
                            margin-left: 10px;
                          `}
                        />

                        <Text>+1 604-704-5402</Text>
                      </Row>
                    </a>
                    <a href="https://www.linkedin.com/in/shawn-noruzi/">
                      <Row>
                        <SiLinkedin
                          className={css`
                            font-size: 30px;
                            margin-right: 23px;
                            margin-bottom: 40px;
                            margin-left: 10px;
                          `}
                        />
                        <Text>linkedin.com/in/shawn-noruzi/</Text>
                      </Row>
                    </a>
                    <a href="https://github.com/Shawn-Noruzi">
                      <Row>
                        <FiGithub
                          className={css`
                            font-size: 30px;
                            margin-right: 23px;
                            margin-bottom: 40px;
                            margin-left: 10px;
                          `}
                        />
                        <Text>github.com/Shawn-Noruzi</Text>
                      </Row>
                    </a>
                  </Container>
                </Container>
              </Col>
              <Col
                className={css`
                  backdrop-filter: blur(15px);
                  border-top-right-radius: 25px;
                  border-bottom-right-radius: 25px;
                `}
                lg={6}
              >
                <form onSubmit={this.handleSubmit}>
                  <Container>
                    <Row>
                      <Col>
                        <div className="form-group">
                          <FormText>First Name</FormText>
                          <input
                            className="input-box"
                            type="text"
                            name="firstname"
                            onChange={this.handleChange}
                            value={this.state.firstname}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group">
                          <FormText>Last Name</FormText>
                          <input
                            className="input-box"
                            name="lastname"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.lastname}
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div className="form-group">
                          <FormText>Email</FormText>
                          <input
                            name="email"
                            className="input-box"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div className="form-group">
                          <FormText>
                            What type of site are you interested in?
                          </FormText>
                          <Row onChange={this.handleChange}>
                            <RadioContainer>
                              <input
                                className="radio-input"
                                id="radiopersonal"
                                name="radio"
                                value="personal"
                                type="radio"
                              />
                              <RadioText htmlFor="radiopersonal">
                                Personal
                              </RadioText>
                            </RadioContainer>
                            <RadioContainer>
                              <input
                                className="radio-input"
                                id="radiolandingpage"
                                name="radio"
                                value="landingpage"
                                type="radio"
                              />
                              <RadioText htmlFor="radiolandingpage">
                                Landing Page
                              </RadioText>
                            </RadioContainer>
                            <RadioContainer>
                              <input
                                className="radio-input"
                                id="radioecommerce"
                                name="radio"
                                value="personal"
                                type="radio"
                              />
                              <RadioText htmlFor="radioecommerce">
                                E-Commerce
                              </RadioText>
                            </RadioContainer>
                          </Row>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div className="form-group">
                          <FormText>Message</FormText>
                          <div
                            className={css`
                              height: 20px;
                            `}
                          />
                          <textarea
                            name="msg"
                            className="input-box textarea"
                            onChange={this.handleChange}
                            value={this.state.msg}
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={{ size: "3", offset: "6" }}>
                        <button
                          className={this.state.menu ? "" : "buttonSubmit"}
                          disabled={this.state.sent}
                          type="submit"
                          className="learn-more"
                        >
                          <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                          </span>
                          <span className="button-text">
                            {this.state.sent ? "Email Sent! " : "Send Email"}
                          </span>
                        </button>
                      </Col>
                    </Row>

                    <div
                      className={css`
                        height: 50px;
                      `}
                    />
                  </Container>
                </form>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
