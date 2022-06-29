import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { GiMagicSwirl, GiDragonOrb } from "react-icons/gi"
import { HiOutlineDocument } from "react-icons/hi"

const DnD = () => {

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    return (<section>
        <Container fluid className="dnd-container">
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
                            opacity: 0.05,
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
            <Container fluid className="dnd-section">
                <h1 className="white pagetitle">Dungeons & Dragons!</h1>
                <h4 className="white">All my creations for my Dungeons and Dragons games!</h4>
                <br></br>
                <br></br>
                <Row>
                    <Col md="6">
                        <GiDragonOrb className="dnd-icon" size="180" />
                        <h1 className="white">Anivea</h1>
                        <h4 className="white">A Custom Campaign World</h4>
                        <p className="white lefty">
                            Anivea is a custom setting that I've created and used in
                            my own D&D campaigns. A standard high-fantasy setting, 
                            Anivea is the world that remains after the two most powerful
                            gods of the realm destroyed each other in a civil war, sending
                            the remaining gods to shelter themselves beyond the realm. The 
                            remains are a godless world, filled with the mysteries left
                            behind and those who wish to exploit them.
                        </p>
                        <p className="white lefty">
                            The world has 4 nations, the largest being Zimmer, a nation 
                            formed as a reaction to the expansion of the dictatorial state
                            of Entrellus. Entrellus also generated conflicts with Rynoth, 
                            the hidden, magic filled nation of monstrous races made up of 
                            those that were banished from Rynoth in its early conquering days. 
                            The final nation, Voldir, is the home of Dwarves and Gnomes, and 
                            remains largely neutral in these affairs. For the most part, the 
                            world's populations knows little of the great wonders remaining 
                            from the time of the gods, being more concerned with the conflicts 
                            of the present day, but who is to say they aren't one and the same?
                        </p>
                        <p className="white lefty">
                            In the world guide, you'll find a complete history, a description of 
                            all of the nations and the cities within them, and plot hooks for 
                            characters to take advantage of in each location. Eventually, I hope
                            to create a complete set of quests, along with at least one set of 
                            adventures for a full campaign. 
                        </p>
                        <p className="white lefty">
                            The icon below is a link to the Google Doc where I do all my work, so 
                            you'll be seeing a live update on my progress.
                        </p>
                        <a href="https://docs.google.com/document/d/1Ix5X6X5YUAh_D8p0IvVjuF7fbd9FwnAxjJLfjiK_jYQ/edit?usp=sharing">
                            <HiOutlineDocument className="dnd-icon" size="50"/>
                        </a>
                        <br></br>
                        <br></br>
                    </Col>
                    <Col md="6">
                        <GiMagicSwirl className="dnd-icon" size="180" />
                        <h1 className="white">Mystic</h1>
                        <h4 className="white">A Homebrew Class</h4>
                        <p className="white lefty">
                            For a long time, Wizards of the Coast has tried to create a mystic 
                            class. This class would use psionic powers, effectively creating 
                            spell effects without the need for components. The primary feature 
                            of this class would be the concept of talents. While spellcasters could 
                            create several wildly different effects with distinct spells, mystics
                            would pick up a small number of talents, each of which had several 
                            abilities that were related. This is a brilliant idea that I think players 
                            should drive there spellcasters with, as related effects generate characters
                            that feel more like characters than a stat-block.
                        </p>
                        <p className="white lefty">
                            However, WotC screwed up. They created a Mystic that could accomplish all of
                            their features by level 11, only gaining more points to use those features for 
                            the remaining levels. This created a massive issue with balancing, complicated 
                            rules, and an oversaturation of calculation. I intend to resolve this. 
                        </p>
                        <p className="white lefty">
                            My new mystic uses a spell like system, where a Mystic gains a set of talents 
                            at first level, and can use only the first stage of the talent. As they gain levels,
                            they learn new talents at low stages, and their existed talents gain higher stages. 
                            This means that the earliest talents learned will be the most powerful at the end. 
                            These function as spells that grow over time, which I find to be a much cooler 
                            system than spells. 
                        </p>
                        <p className="white lefty">
                            The icon below is a link to the Google Doc where I do all my work, so 
                            you'll be seeing a live update on my progress.
                        </p>
                        <a href="https://docs.google.com/document/d/12aw7g6X5OLhRFsGxWlseDPFJwiCo8sFnuW94zBendHE/edit?usp=sharing">
                            <HiOutlineDocument className="dnd-icon" size="50"/>
                        </a>
                        <br></br>
                        <br></br>
                    </Col>
                </Row>
            </Container>
        </Container>
    </section>
    )
}

export default DnD;