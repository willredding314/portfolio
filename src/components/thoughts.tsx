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
                    <h1 className="white pagetitle">My Thoughts</h1>
                    <h5 className="white">An overdramatic notepad, for whatever else comes to mind</h5>
                    <br></br>
                    <Tabs className="tabset" defaultIndex={3}>
                        <TabList>
                            <Tab>Favorite Things</Tab>
                            <Tab>Barbershop</Tab>
                        </TabList>
                        <TabPanel className="favs-thoughts">
                            <p className="white">For everything I'm into at the moment</p>
                            <h5 className="white">Contents:</h5>
                            <li className="white">Music Picks</li>
                            <li className="white">TV Show Picks</li>
                            <li className="white">Movie Picks</li>
                            <br></br>
                            <h5 className="white lefty">Music Picks:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        <strong><u>Simon and Garfunkel:</u></strong> The epitome of 60s folk music, Simon and 
                                        Garfunkel pair Paul Simon's legendary songwriting with the voice of Art Garfunkel. I consider 
                                        both to be the greatest of all time in their respective crafts. The album <i>Bridge Over Troubled
                                        Water</i> is a good introduction there.  
                                    </p>
                                    <p className="white lefty">
                                        <strong><u>Jon Bellion:</u></strong> There's a few things that always work for me in pop music. 
                                        Big choir vocals, trumpet lines, and string sections to name a few. Jon Bellion does all of them. 
                                        It's a shame he hasn't released an album since 2018. Still, I often recommend <i>Glory Sound Prep</i>. 
                                    </p>
                                    <p className="white lefty">
                                        <strong><u>Some other songs I'm into right now:</u></strong> 
                                        <ul>
                                            <li>Gravedigger - Dave Matthews</li>
                                            <li>Superbloom - Misterwives</li>
                                            <li>Something Real - Post Malone</li>
                                        </ul>
                                    </p>
                                </Col>
                            </Row>
                            <br></br>
                            <h5 className="white lefty">TV Picks:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        <strong><u>Community:</u></strong> I've never seen a show so quickly hit its stride. 
                                        An incredibly meta, self-depricating show that leans so heavily into its complete loss 
                                        of any level of groundedness. Really trails off towards the end of the series, but the 
                                        early seasons are the best TV I've ever watched. <i>Six Seasons and a Movie!</i>
                                    </p>
                                    <p className="white lefty">
                                        <strong><u>Big Brother:</u></strong> An embarrassing fact about me, I enjoy some good 
                                        reality TV. This is mostly competition shows, like Survivor or Amazing Race, but I've certainly
                                        sampled other forms of reality TV. But Big Brother is something different for me, as it is as 
                                        close to a pure social competition and expiriment as popular TV could get. 
                                    </p>
                                    <p className="white lefty">
                                        <strong><u>Dropout.tv:</u></strong> Not a TV show, but rather a small, largely unknown streaming service
                                        from what used to be CollegHumor. I got a subscription to Dropout to watch some D&D, but I've found myself
                                        watching everything they put out. Lots of improv comedy and other low-budget content that's all very fun. 
                                    </p>
                                </Col>
                            </Row>
                            <br></br>
                            <h5 className="white lefty">Movie Picks:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        <strong><u>Good Will Hunting:</u></strong> The greatest of all time. Powerful performances
                                        all around, and an incredible story. <i>I got her number, how do you like dem apples?</i>
                                    </p>
                                    <p className="white lefty">
                                        <strong><u>The Prestige:</u></strong> My favorite Christopher Nolan movie, and one you'll still 
                                        be thinking about weeks later. 
                                    </p>
                                    <p className="white lefty">
                                        <strong><u>Once Upon a Time in Hollywood:</u></strong> Might be a hot take, but I think this is 
                                        Tarantino's best work. A natural dialogue that's unhindered by flashy set pieces, it enabled 
                                        everything Tarantino does best. 
                                    </p>
                                </Col>
                            </Row>
                            <a href="/secret-top-100" className="secret">But wait, there's more</a>
                        </TabPanel>
                        <TabPanel className="barbershop-thoughts">
                            <h5 className="white">Contents:</h5>
                            <li className="white">Rolling Around Heaven All Day: A Barbershop Discussion</li>
                            <br></br>
                            <h5 className="white lefty">Rolling Around Heaven All Day: A Barbershop Discussion:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        I'm not a big a capella guy. A capella, for the most part, acts to replace
                                        the use of instruments in a song with voices. Effectively, an inferior way 
                                        of creating music. However, none of that matters when it comes to barbershop
                                        quartets. While classically a bit cheesy (and still cheesy sometimes), there is 
                                        something notable and powerful about the four part harmonies of some of the best 
                                        arrangements. I spent most of high school singing barbershop music in some way, 
                                        and so dearly miss it. A barbershop quartet consists of four voices: a bass (the 
                                        low notes), a tenor (the high notes), a lead (the melody), and a baritone (the 
                                        junk, leftover notes). I've been a tenor for all my days, having a pretty high 
                                        range. 
                                    </p>
                                    <p className="white lefty">
                                        If you'd like to begin going down the rabbit hole, I've got two recommendations to 
                                        get you started. It's important to note that these <strong>MUST</strong> be watched 
                                        in their entirety. All barbershop songs end in what is known as a "tag", which is 
                                        nothing more than a mark of the end of a song. While some ballads have tags that 
                                        bring the volume down to silence, most end in a huge series of chords. The best part 
                                        of these, from my perspective, is what is called a "post", which is one note that is 
                                        held for a long time. This usually comes from the tenor or lead, though a bass will 
                                        sometimes sing a post. Each of my two examples have excellent tags, both with incredible 
                                        posts, so if nothing else, watch the last minute of each video. 
                                    </p>
                                    <p className="white lefty">
                                        The first is an incredibly medley of songs from the Hunchback of Notre Dame, sung by the 
                                        quartet Ringmasters. This holds as one of the best tags in barbershop history, with a 
                                        false tag before the real one. You can watch it <a href="https://www.youtube.com/watch?v=Qo_N9_ZFBhs">
                                        here</a>.
                                    </p>
                                    <p className="white lefty">
                                        The second is what I would call the greatest barbershop performance ever. Performed by the 
                                        quartet Crossroads, this piece called "Lucky Old Sun" is one of the highest scoring songs 
                                        ever at the Barbershop Harmony Society's competition. You can watch it <a href="https://www.youtube.com/watch?v=u7mGjSZpdpk">
                                        here</a>.
                                    </p>
                                    <p className="white lefty">
                                        I lied! You get three songs! This one comes from the Newfangled Four. They're goofy, they're 
                                        fun, they're just a great time to watch! While most quartet competitors perform very serious 
                                        pieces, these guys would bring only fun to the finals. This one is called 
                                        "Supercalifragilisticexpialidocious", and you can watch it <a href="https://www.youtube.com/watch?v=7BH2CqE5mNQ">
                                        here</a>.
                                    </p>
                                </Col>
                            </Row>
                        </TabPanel>
                    </Tabs>
                </Container>
            </Container>
        </section >
    )
}

export default Thoughts;