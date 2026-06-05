import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './imgs/PortfolioNew.png'
import d20 from './imgs/d20outline.png'
import { AiFillGithub, AiOutlineFileImage } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5"
import { BiCameraMovie } from 'react-icons/bi'
import { FaBridge } from "react-icons/fa6";
import { MdSportsHockey } from "react-icons/md";


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
                                speed: 1,
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
                            <IoDocumentTextOutline size="250" color="white"/>
                                <h1 className="white">BackseatGM</h1>
                                <h5 className="white">
                                    Located at <a target="_blank" href="http://backseat-gm.com">backseat-gm.com</a>
                                    Backseat GM is a platform for evaluating NHL contracts using neural networks. The site 
                                    includes several different models that predict contract AAV for players across the league, 
                                    and aggregates these results for team and player analysis    
                                </h5>
                                <a target="_blank" href="http://backseat-gm.com" ><MdSportsHockey className="gh-link" size="50" color="white"/></a>
                            </Col>
                            <Col md="2"></Col>
                            <Col md="5">
                                <FaBridge size="250" color="white"/>
                                <h1 className="white">Konigsfold</h1>
                                <h5 className="white">
                                    An information retrieval project built in Python, Konigsfold is built to generate learning paths for scientific topics, allowing users to
                                    study a new academic field in a logical ordering based on Wikipedia data.
                                </h5>
                                <a target="_blank" href="https://github.com/willredding314/konigsfold" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                        </Row>
                        <br></br>
                        <Row className="justify-content-center">
                            <Col md="5">
                                <img src={logo} width="250" height="250"/>
                                <h1 className="white">This Site!</h1>
                                <h5 className="white">
                                    This website is not only a place to talk about myself, it was also
                                    my introduction to TypeScript and React. Learning from a number of 
                                    tutorials in the summer of 2022, I made this site to up my game on 
                                    web development, as my previous site (made of only HTML/CSS) was 
                                    painfully dull. 
                                </h5>
                                <a target="_blank" href="https://github.com/willredding314/portfolio" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </section>
    )
}

export default Code;