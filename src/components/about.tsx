import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MovingText from 'react-moving-text'
import './styles.css'
import willsunset from './imgs/willsunset.png'
import willandkevin from './imgs/willandkevin.png'
import willandabbys from './imgs/willandabbys.png'

const About = () => {

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    return (<section>
        <Container fluid className="about-container">
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
            <Container fluid className="about-section">
                <h1 className="white">About Me</h1>
                <br></br>
                <Row>
                    <Col md="6">
                        <p className="white">Email: willredding3.14@gmail.com</p>
                    </Col>
                    <Col md="6">
                        <a href="" download><button className="resume-button">Download my resume</button></a>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="8">
                        <h2 className="white"><u>Synopsis:</u></h2>
                        <p className="white"><i>Nothing has changed, he is the same.</i> -Jon Bellion</p>
                        <p className="white lefty">
                            Let's make it a whole biography, and start at the beginning. I was born, raised, and 
                            still primarily reside in North Attleboro, Massachusetts. I graduated from North Attleboro
                            High School (top 10 in my class, class president), all the while beginning my explorations
                            in software. From here I moved to Northeastern University in Boston, where I continue to 
                            study Computer Science at Khoury College, picking up some internships along the way.
                            As of now, I've got two more years left at Northeastern, with one co-op baked in, before 
                            I head into the great unknown. 
                        </p>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={willsunset} width="204" height="273"></img>
                            <figcaption className="white caption">Perhaps the best photo of me ever taken</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <br></br>
                        <figure>
                            <img src={willandkevin} width="222" height="221"></img>
                            <figcaption className="white caption">Me and international celebrity Kevin Moody</figcaption>
                        </figure>
                    </Col>
                    <Col md="8">
                        <h2 className="white"><u>Code:</u></h2>
                        <p className="white lefty">
                            Beginning my code explorations in early high school, I moved into college with a functional 
                            knowledge of Java, Javascript, and HTML/CSS. During my time at Northeastern, I've been 
                            spending more time with Python and Java while picking up languages like C. During this time 
                            I've interned at two companies, Orchard Therapeutics as an Automation Engineer and RECUR as a 
                            DevOps Engineer, picking up Go, AWS, and some Github skills during this time. During my semesters, 
                            I've also worked as a TA for Fundementals of CS, and been a part of Oasis Development Club, joining
                            teams to build a for-fun software project.   
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="8">
                        <h2 className="white"><u>My Life:</u></h2>
                        <p className="white lefty">
                            As pictured on this page, I spend whenever I can in Swanzey NH, where I've got 
                            several wonderful friends and a church-affiliated family camp where I would spend 
                            my summers before working and volunteering at the camp. When I'm not spending time 
                            up here, I'm often playing tennis, ultimate frisbee, and doing trivia. I've got an 
                            interest in music, specifically writing and producing, where I am god-awful but having 
                            a good time. I also obviously love D&D, and have been working on a homebrew campaign and 
                            other creations. I won't elaborate much on that, you can check out the 'D&D' tab for that! 
                            
                        </p>
                    </Col>
                    <Col md="4">
                        <figure>
                            <img src={willandabbys} width="201" height="267"></img>
                            <figcaption className="white caption">Me with two people, both named Abby</figcaption>
                        </figure>
                    </Col>
                </Row>
                
            </Container>

        </Container>
    </section>
    )
}

export default About;