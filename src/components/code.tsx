import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './imgs/PortfolioNew.png'
import d20 from './imgs/d20outline.png'
import { AiFillGithub, AiOutlineFileImage } from 'react-icons/ai'
import { MdApartment } from 'react-icons/md'
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
                                <img src={logo} width="250" height="250"/>
                                <h1 className="white">This Site!</h1>
                                <h5 className="white">
                                    This website is not only a place to talk about myself, it's also
                                    my introduction to TypeScript and React. Learning from a number of 
                                    tutorials in the summer of 2022, I made this site to up my game on 
                                    web development, as my previous site (made of only HTML/CSS) was 
                                    painfully dull. 
                                </h5>
                                <a target="_blank" href="https://github.com/willredding314/portfolio" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                            <Col md="2"></Col>
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
                                <a target="_blank" href="https://github.com/willredding314/OasisProject" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md="5">
                                <MdApartment />
                                <h1 className="white">Rate My Dorms</h1>
                                <h5 className="white">
                                    Rate My Dorms is a project created for my Web Development class in 
                                    the fall of 2022. Built in Next.js and Node.js, this project allows people
                                    to view residence halls at their school, and rate on comment their pages to
                                    allow other students to be better informed on their future dorms. 
                                </h5>
                                <a target="_blank" href="https://github.com/willredding314/webDevFinalProject" ><AiFillGithub className="gh-link" size="50"/></a>
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
                                <a target="_blank" href="https://github.com/willredding314/VidoImageProcessing" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </section>
    )
}

export default Code;