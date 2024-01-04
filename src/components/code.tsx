import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './imgs/PortfolioNew.png'
import d20 from './imgs/d20outline.png'
import { AiFillGithub, AiOutlineFileImage } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5"
import { BiCameraMovie } from 'react-icons/bi'
import { FaBridge } from "react-icons/fa6";


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
                                <h1 className="white">NotePath</h1>
                                <h5 className="white">
                                    A personal project primarily built in December of 2023, NotePath is a Google Docs like platform that allows users 
                                    to maintain and edit multiple text documents. The notable difference is that every document exposes a public API path,
                                    allowing users to request the document's text as HTML on their own websites, allowing for website edits without 
                                    redeploying or even editing the codebase. Notepath uses NextJS in Typescript for the frontend, and Flask/Python with Postgres 
                                    on the backend. 
                                </h5>
                                <a target="_blank" href="https://github.com/willredding314/notepath" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                            <Col md="2"></Col>
                            <Col md="5">
                                <FaBridge size="250" color="white"/>
                                <h1 className="white">Konigsfold</h1>
                                <h5 className="white">
                                    An information retrieval project built in Python, Konigsfold is built to generate learning paths for scientific topics, allowing users to
                                    study a new academic field in a logical ordering, providing users with an ordered series of Wikipedia articles. Given an topic, 
                                    Konigsfold can identify hundreds of documents representing subtopics in the field, collect them into subrelevant groups, and order 
                                    them based on year of discovery to produce a reasonable learning path that might be a bit more fun than a textbook.
                                </h5>
                                <a target="_blank" href="https://github.com/willredding314/konigsfold" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                        </Row>
                        <br></br>
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
                    </Container>
                </Container>
            </Container>
        </section>
    )
}

export default Code;