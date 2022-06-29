import React, { useCallback } from "react"
import "./styles.css"
import { Container, Row, Col } from "react-bootstrap"
import headshot from './imgs/headshotHex.png'
import MovingText from 'react-moving-text'
import AnimatedBg from 'react-animated-bg'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import d20 from './imgs/d20outline.png'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const Home = () => {

    const particlesInit = async (engine:any) => {
        await loadFull(engine);
    };

    return (
        <section>
            <Container fluid className="home-container">
                <Particles id="#tsparticles" 
                    init={particlesInit}
                    options={{
                        background: {
                            color: {
                              value: "#212528",
                            },
                          },
                          fpsLimit: 120,
                          interactivity: {
                            events: {
                              onClick: {
                                enable: false,
                                mode: "push",
                              },
                              onHover: {
                                enable: false,
                                mode: "repulse",
                              },
                              resize: true,
                            },
                            modes: {
                              push: {
                                quantity: 4,
                              },
                              repulse: {
                                distance: 200,
                                duration: 0.4,
                              },
                              bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.5,
                                size: 40
                              },
                            },
                          },
                          particles: {
                            color: {
                              value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            collisions: {
                              enable: true,
                            },
                            move: {
                              direction: "none",
                              enable: true,
                              outModes: {
                                default: "bounce",
                              },
                              random: false,
                              speed: 2,
                              straight: false,
                            },
                            number: {
                              density: {
                                enable: true,
                                area: 800,
                              },
                              value: 100,
                            },
                            opacity: {
                              value: 0.2,
                            },
                            shape: {
                              type: "circle",
                            },
                            size: {
                              value: { min: 1, max: 5 },
                            },
                          }
                    }}
                />
                <Container className="home-top">
                    <Row>
                        <Col md={5} className="headshot">
                            <img src={headshot} width="300" height="300"></img>
                        </Col>
                        <Col md={7} className="mainCard">
                            <br></br>
                            <MovingText
                                type="popIn"
                                duration="3000ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="infinite"
                                fillMode="none">
                                <h1 className="heyThere"><strong>Welcome!</strong></h1>
                            </MovingText>
                            <br></br>
                            <h1 className="white">I'm Will.</h1>
                            <h4 className="white">Developer, student, and a guy with a website.</h4>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container fluid className="home-bottom">
                    <Row>
                        <Col md="6" className="home-desc">
                            <h3 className="white">From Javascript to Demi-Lich...</h3>
                            <br></br>
                            <h3 className="white">I've got it all!</h3>
                            <br></br>
                            <h5 className="white">
                                First and foremost, I'm a software developer currently operating out of 
                                Massachusetts and studying at Northeastern University.
                            </h5>
                            <br></br>
                            <h5 className="white">
                                I've worked in languages like Java, Python, Go, and Typescript, 
                                and have experience with technologies like Terraform and AWS. 
                            </h5>
                            <br></br>
                            <h5 className="white">
                                I also play a lot of D&D, and make lots of homebrew content that
                                you can check out here. 
                            </h5>
                        </Col>
                        <Col md="6" className="d20col">
                            <br></br>
                            <br></br>
                            <img src={d20} className="d20"/>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container fluid className="contact-card">
                    <Row>
                        <Col md="12">
                            <h3 className="white">
                                Find me here!
                            </h3>
                            <a href="https://www.linkedin.com/in/will-redding314/" className="social-link"><AiOutlineLinkedin size={50}/></a>
                            <a href="https://www.instagram.com/willredding3.14/" className="social-link"><AiOutlineInstagram size={50}/></a>
                            <a href="https://twitter.com/WillRedding314" className="social-link"><AiOutlineTwitter size={50}/></a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Home;