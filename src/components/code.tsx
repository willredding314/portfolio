import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './imgs/PortfolioNew.png'
import d20 from './imgs/d20outline.png'
import { AiFillGithub, AiOutlineFileImage } from 'react-icons/ai'
import { BiCameraMovie } from 'react-icons/bi'


const Code = () => {
    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    return (
        <section>
            <Container fluid className="code-container">
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
                                opacity: 0.1,
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
                                value: 0.1,
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
                <Container fluid className="code-section">
                    <h1 className="white pagetitle">My Projects</h1>
                    <Container className="projects">
                        <Row>
                            <Col md="5">
                                <img src={logo} width="250" height="250"/>
                                <h1 className="white">This Site!</h1>
                                <h5 className="white">
                                    This website is not only a place to talk about myself, it's also
                                    my introduction to TypeScript and React. Learning from a number of 
                                    tutorials in the summer of 2022, I made this site to up my game on 
                                    web development, as my previous site (made of only HTML/CSS) was 
                                    painfully dull. 
                                </h5>
                                <a href="https://github.com/willredding314/portfolio" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                            <Col md="2"></Col>
                            <Col md="5">
                                <img src={d20} width="250" height="250"/>
                                <h1 className="white">5e Playtest Arena</h1>
                                <h5 className="white">
                                    My favorite project! Been thinking about this one for a while, and 
                                    as of now it is finally in progress! This site is also made in React.
                                    This project will be the first site to fully incorporate the rules 
                                    of D&D combat into a web game, with the intention being that players
                                    can build characters and test them against automatic enemies.
                                </h5>
                                <a href="https://github.com/willredding314/5e-playtest-arena" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md="5">
                                <BiCameraMovie size="250" color="white"/>
                                <h1 className="white">Movie Recs</h1>
                                <h5 className="white">
                                    A Python project built with the Django framework, Movie Recs is a 
                                    project that I completed during my time in the Northeastern Oasis 
                                    development club. This projects takes information from users about 
                                    the characteristics of their perfect movie, and then uses vector 
                                    similarity to determine the optimal movie from IMDb's top 250 movies. 
                                </h5>
                                <a href="https://github.com/willredding314/OasisProject" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                            <Col md="2"></Col>
                            <Col md="5">
                                <AiOutlineFileImage size="250" color="white" />
                                <h1 className="white">Vido Image Processing</h1>
                                <h5 className="white">
                                    Named after a wonderful teacher of ours, Vido Image Processing 
                                    is an image processer created by myself and a lab partner during and after
                                    my Object Oriented Design class. Built in Java, this project uses JFrame 
                                    for the GUI of a system that allows for uploading, downloading, viewing, 
                                    and editing of several different forms of image files.
                                </h5>
                                <a href="https://github.com/willredding314/VidoImageProcessing" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Container className="stack-section">
                        <h2 className="white">My Stack</h2>
                        <Row>
                            <Col md="1"></Col>
                            <Col md="2">
                                <li className="white">Java</li>
                            </Col>
                            <Col md="2">
                                <li className="white">Python</li>
                            </Col>
                            <Col md="2">
                                <li className="white">Go</li>
                            </Col>
                            <Col md="2">
                                <li className="white">TS/React</li>
                            </Col>
                            <Col md="2">
                                <li className="white">Github</li>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                        <Row>
                            <Col md="1"></Col>
                            <Col md="2">
                                <li className="white">C</li>
                            </Col>
                            <Col md="2">
                                <li className="white">Bash</li>
                            </Col>
                            <Col md="2">
                                <li className="white">AWS</li>
                            </Col>
                            <Col md="2">
                                <li className="white">Terraform</li>
                            </Col>
                            <Col md="2">
                                <li className="white">VSCode</li>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </section>
    )
}

export default Code;