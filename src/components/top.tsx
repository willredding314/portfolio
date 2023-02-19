import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineFileImage } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import 'react-tabs/style/react-tabs.css';


const TopThings = () => {

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    return (
        <section>
            <Container fluid className="thoughts-container">
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
                <Container fluid className="thoughts-section">
                    <h1 className="white pagetitle">A Secret Page!</h1>
                    <h5 className="white">Look at that! You found a secret page.</h5>
                    <br></br>
                    <Tabs className="tabset" defaultIndex={3}>
                        <TabList>
                            <Tab>Top 100 Things</Tab>
                        </TabList>
                        
                        <TabPanel className="other-thoughts">
                            <h5 className="white lefty">Will Redding's Top 100 Things of All Time:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                       You seem to be interested in my favorite things, given that you've found
                                       this page. So I'll give you a big list. In fact, I'll give you the 100 
                                       things that I think are the best in the world. I hope you enjoy. If you don't 
                                       care about this list, and just did some searching around my site, there may be 
                                       more secrets for you to find. 
                                    </p>
                                    <ol>
                                        <li className="white lefty">Dungeons and Dragons</li>
                                        <li className="white lefty">Jon Bellion</li>
                                        <li className="white lefty">Barbershop Quartets</li>
                                        <li className="white lefty">My LL Bean Jacket</li>
                                        <li className="white lefty">Trumpet Sections</li>
                                        <li className="white lefty">Toyota Rav-4</li>
                                        <li className="white lefty">Vaseline</li>
                                        <li className="white lefty">Boating Days</li>
                                        <li className="white lefty">Telling Stories</li>
                                        <li className="white lefty">Poutine</li>
                                        <li className="white lefty">Singing Really Loud</li>
                                        <li className="white lefty">Kevin Moody</li>
                                        <li className="white lefty">VSCode</li>
                                        <li className="white lefty">Bridge Over Troubled Water</li>
                                        <li className="white lefty">Diet Coke</li>
                                        <li className="white lefty">Gazebos</li>
                                        <li className="white lefty">Diner Breakfast</li>
                                        <li className="white lefty">Goldfish</li>
                                        <li className="white lefty">Cliff Stoll</li>
                                        <li className="white lefty">Naturally Moving Water</li>
                                        <li className="white lefty">Lex Fridman</li>
                                        <li className="white lefty">Good Will Hunting</li>
                                        <li className="white lefty">Libertarianism</li>
                                        <li className="white lefty">Hearing you have a good reputation</li>
                                        <li className="white lefty">The smell of Swanzey NH</li>
                                        <li className="white lefty">Comprehensive, grounded magic systems</li>
                                        <li className="white lefty">Hot tubs</li>
                                        <li className="white lefty">Moe's</li>
                                        <li className="white lefty">Big Brother</li>
                                        <li className="white lefty">Tennis</li>
                                        <li className="white lefty">Pepperidge Farm Soft Chocolate Chip Cookies</li>
                                        <li className="white lefty">The feeling of new socks</li>
                                        <li className="white lefty">Rubik's Cubes</li>
                                        <li className="white lefty">Thought Games</li>
                                        <li className="white lefty">Rain Sounds</li>
                                        <li className="white lefty">Jamaica</li>
                                        <li className="white lefty">Chick-fil-a Sauce</li>
                                        <li className="white lefty">Audiobooks</li>
                                        <li className="white lefty">Weekly events to look forward to</li>
                                        <li className="white lefty">Glade Skiing</li>
                                        <li className="white lefty">Sweet Potato Fries</li>
                                        <li className="white lefty">Urinal Dividers</li>
                                        <li className="white lefty">Whiteboards</li>
                                        <li className="white lefty">A fresh album release</li>
                                        <li className="white lefty">Old Pokemon Games</li>
                                        <li className="white lefty">Soft Pants</li>
                                        <li className="white lefty">Sitcoms without a laugh track</li>
                                        <li className="white lefty">Wireless-chargers</li>
                                        <li className="white lefty">Obi-Wan Kenobi</li>
                                        <li className="white lefty">Top 10 Lists</li>
                                        <li className="white lefty">Iron Hide Mobile Games</li>
                                        <li className="white lefty">Edward Snowden</li>
                                        <li className="white lefty">Frisbee</li>
                                        <li className="white lefty">Steve Wozniak</li>
                                        <li className="white lefty">Star Wars</li>
                                        <li className="white lefty">Good barbecue</li>
                                        <li className="white lefty">Ping Pong</li>
                                        <li className="white lefty">Routines</li>
                                        <li className="white lefty">Remote Work</li>
                                        <li className="white lefty">A good pillow</li>
                                        <li className="white lefty">Bayliner Heyday</li>
                                        <li className="white lefty">Turtles</li>
                                        <li className="white lefty">A good album intro</li>
                                        <li className="white lefty">Life Planning</li>
                                        <li className="white lefty">willredding.com</li>
                                        <li className="white lefty">Beating a coding challenge</li>
                                        <li className="white lefty">A good phone call</li>
                                        <li className="white lefty">Jay Peak</li>
                                        <li className="white lefty">Lambda Calculus</li>
                                        <li className="white lefty">Crocs</li>
                                        <li className="white lefty">Dropout Originals</li>
                                        <li className="white lefty">Big choir sections in pop music</li>
                                        <li className="white lefty">Baby ducks</li>
                                        <li className="white lefty">Finding out someone likes you</li>
                                        <li className="white lefty">Box Seats</li>
                                        <li className="white lefty">Pi</li>
                                        <li className="white lefty">LEDs</li>
                                        <li className="white lefty">An unexpected gift</li>
                                        <li className="white lefty">The confidence of knowing you look good</li>
                                        <li className="white lefty">The concept of a predictive universe</li>
                                        <li className="white lefty">Being respected</li>
                                        <li className="white lefty">Mom's Spaghetti Sauce</li>
                                        <li className="white lefty">Indoor Water Parks</li>
                                        <li className="white lefty">Bacon</li>
                                        <li className="white lefty">A nice backpack</li>
                                        <li className="white lefty">A good walk</li>
                                        <li className="white lefty">Slippers</li>
                                        <li className="white lefty">LLBean</li>
                                        <li className="white lefty">Python</li>
                                        <li className="white lefty">Community (TV Show)</li>
                                        <li className="white lefty">Quinn XCII</li>
                                        <li className="white lefty">Chess</li>
                                        <li className="white lefty">Fake Punts</li>
                                        <li className="white lefty">Mark Normand</li>
                                        <li className="white lefty">The word "meta"</li>
                                        <li className="white lefty">Dark mode</li>
                                        <li className="white lefty">Teaching people things</li>
                                        <li className="white lefty">Notetaking in YAML</li>
                                        <li className="white lefty">Long conversations</li>
                                        <li className="white lefty">Shirley Temples</li>
                                    </ol>
                                </Col>
                            </Row>
                        </TabPanel>
                    </Tabs>
                </Container>
            </Container>
        </section >
    )
}

export default TopThings;