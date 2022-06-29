import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineFileImage } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import 'react-tabs/style/react-tabs.css';


const Thoughts = () => {

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
                    <h1 className="white">My Thoughts</h1>
                    <h6 className="white">An overdramatic notepad, for whatever else comes to mind</h6>
                    <br></br>
                    <Tabs className="tabset">
                        <TabList>
                            <Tab>Code Thoughts</Tab>
                            <Tab>Favorite Things</Tab>
                            <Tab>Other</Tab>
                        </TabList>
                        <TabPanel className="code-thoughts">
                            <h5 className="white">Contents:</h5>
                            <li className="white">Design and Challenges for 5e Arena</li>
                            <br></br>
                            <h5 className="white lefty">Design and Challenges for 5e Arena:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        At the point of writing this, I am in the beginning design phases of 
                                        this project. You can keep up on this project over in the 'Code' section. 
                                    </p>
                                    <p className="white lefty">
                                        5e Playtest Arena is an ambitious project for me. I originally anticipated 
                                        the frontend being the most complicated feature, as I had never been 
                                        particularly good at web dev. However, some work in React made me realize the 
                                        frontend wouldn't be that tricky, and some more thought into the complexities
                                        of D&D combat made me realize that there would be some major challenges. The
                                        beginning pieces like generating a battlemap and having a basic action economy
                                        seems simple, but the interuptions to this system and the vast array of class 
                                        features will make for some complicated and tedious pieces, respectively. 
                                    </p>
                                    <p className="white lefty">
                                        Let's go over some basic combat. In D&D, a single round of combat takes about 
                                        6 seconds of gametime (unimportant, but notable). During this time, each 
                                        creature in the combat gets a turn. In the arena, these creatures will be both 
                                        user controlled creatures and programmed enemies. During a turn, a creature gets 
                                        an action, a bonus action, and a movement. These are simple to encode, even when 
                                        allowing a player to do these in any order. However, there are portions of combat 
                                        that don't follow this design. 
                                    </p>
                                    <p className="white lefty">
                                        First, there are features that don't follow these. A fighter taking an action surge 
                                        does not fall into these categories, and a monk's flurry of blows grants them extra 
                                        features during a bonus action. Additionally, its arguable that a creature can take 
                                        some of the action-alloted attacks before a movement, and some after. This might not
                                        be worth coding in, but this is something to take into account when determining the 
                                        required order of events when certain actions are taken. 
                                    </p>
                                    <p className="white lefty">
                                        Perhaps the most difficult part programmatically is the concept from reactions. 
                                        During a round, a player can take a one reaction outside of their turn, but only 
                                        when an event triggers that reaction. These events are often incredibly specific, and 
                                        can be almost anything. This goes from "spell cast within 60 feet", to "attack made within 
                                        attack range", to "creature within 30 feet makes an ability check or saving throw". This 
                                        means that everything that happens needs to be registered as an event before it happens, as
                                        some reactions can negate these effects. These also need a uniform way of being registered,
                                        as two reactions can have different qualifications, even if the same event could trigger both
                                        of them. 
                                    </p>
                                    <p className="white lefty">
                                        This presents a concern to be considered. With the incredible amount of class features available 
                                        in 5th edition D&D, it would be impossible to build this with all 20 player levels available in 
                                        a timely manner. To resolve this, I will initially be building this for only 1st level characters. 
                                        The worry with this is that the design may not be compatible with a class feature later on. This 
                                        leads to my primary principle for this project: "Agnostic Always".
                                    </p>
                                    <p className="white lefty">
                                        This concept primarily applies to combat. Instead of players having an action, bonus action, 
                                        and movement, they will have a list of any number of things they can do in a turn. Each type 
                                        of action will still exist, and a list of possibilities will remain under each, but there 
                                        will be several other types of things that a player can do to account for these non-abiding 
                                        features. As a principle, the battle will be entirely agnostic to the types of things a player 
                                        can do. 
                                    </p>
                                    <p className="white lefty">
                                        However, this principle also allows for a wide expansion, which is excellent for a project I
                                        intend to continue for years to come. This will take many forms, first and foremost being the 
                                        battle being agnostic to the creatures in the combat. The obvious extension of this is combat 
                                        between multiple user controlled creatures, creating the potential for a multiplayer game. A bit
                                        more exciting for me is the concept of entirely programmed creatures, running a combat automatically. 
                                        Running the backend of this through tons of iterations on a platform like AWS Sagemaker can allow 
                                        for the possibility for a optimization of D&D combat. Establishing weights for different styles of 
                                        combat can allow for these styles to be ranked in terms of efficacy when put against a different 
                                        type of opponent, making a thrilling case study of applying AI to D&D combat. 
                                    </p>
                                </Col>
                            </Row>
                        </TabPanel>
                        <TabPanel className="favs-thoughts">
                            <h5 className="white">Contents:</h5>
                            <li className="white">On Having Favorites</li>
                            <li className="white">Music Picks</li>
                            <li className="white">Movie Picks</li>
                            <br></br>
                            <h5 className="white lefty">On Having Favorites:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        I like keeping lists of my favorite things. On my phone I have an ever changing 
                                        list of lists, each being a Top 10 for different categories. I won't go through 
                                        them all on here, as those are mostly for my own use, but I certainly love to talk 
                                        about these favorites.
                                    </p>
                                    <p  className="white lefty">
                                        Something I find notable is that I find some categories conducive to having favorites, 
                                        and others not. I find it extremely easy to select a single favorite movie, song, album, 
                                        or even beverage, but find it impossible to select a single favorite in the category of 
                                        TV show, or food. I'm inclined to believe other people feel the same way. 
                                    </p>
                                </Col>
                            </Row>
                            <br></br>
                            <h5 className="white lefty">Music Picks:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        I've got a pretty narrow music taste, but I've got a couple heavy favorites. I 
                                        heavily encourage you to listen to these. 
                                    </p>
                                    <p className="white lefty">
                                    <strong><u>Simon and Garfunkel:</u></strong> My favorite artists of all time, Paul Simon 
                                    and Art Garfunkel combine what I consider to be the greatest songwriting of all time 
                                    by Simon and the best voice in Art Garfunkel. Bridge Over Troubled Water is, as far 
                                    as I'm concerned, both the best album and song of all time. 
                                    </p>
                                    <p className="white lefty">
                                    <strong><u>Jon Bellion:</u></strong> Another of my favorites, Jon Bellion's production is 
                                    the most interesting I've ever heard. His early work uses almost exclusively
                                    electronic sounds, and that carries over in large part to his later albums, "The 
                                    Human Condition" and "Glory Sound Prep". However, these albums include more acoustic 
                                    instruments, which create a stunning sound. My top picks from him are "Blu" and "JT".
                                    </p>
                                    <p className="white lefty">
                                    <strong><u>Quinn XCII:</u></strong> Quinn XCII takes the same kind of production that
                                    I so love from Jon Bellion, taking his boldness and largeness and turning it into a 
                                    more relaxed, summertime kind of vibe. My top picks here are "Another Day in Paradise",
                                    "Straightjacket", and "Two 10s". 
                                    </p>
                                </Col>
                            </Row>
                            <br></br>
                            <h5 className="white lefty">Movie Picks:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        Compared to music, I feel like I've got a much better knowledge of movies. Here are 
                                        a few of my favorites.
                                    </p>
                                    <p className="white lefty">
                                    <strong><u>Good Will Hunting:</u></strong> The greatest of all time. Powerful performances 
                                    all around, an incredible story, and some of the most iconic lines ever. <i>I got her number, 
                                    how do you like dem apples?</i>
                                    </p>
                                    <p className="white lefty">
                                    <strong><u>Dead Poets Society:</u></strong> Another excellent Robin Williams movie, this
                                    movie is just as iconic in every way. A powerful story with unexpected emotions. <i>O 
                                    Captain, My Captain! </i>
                                    </p>
                                    <p className="white lefty">
                                    <strong><u>Snowden:</u></strong> Not in my top 5, but certainly a film that needs more 
                                    attention. This story sent me down the rabbit hole of Edward Snowden, sparking my interest 
                                    and outrage over the US governments reaction to his whistleblowing. Joseph Gordan Levitt 
                                    remains one of my favorite actors, and plays the part of Snowden masterfully. 
                                    </p>
                                </Col>
                            </Row>
                        </TabPanel>
                        <TabPanel className="other-thoughts">
                            <h5 className="white">Contents:</h5>
                            <li className="white">Nothing but empty space here</li>
                            <br></br>
                        </TabPanel>
                    </Tabs>
                </Container>
            </Container>
        </section >
    )
}

export default Thoughts;