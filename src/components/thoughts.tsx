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
                    <h1 className="white pagetitle">My Thoughts</h1>
                    <h5 className="white">An overdramatic notepad, for whatever else comes to mind</h5>
                    <br></br>
                    <Tabs className="tabset">
                        <TabList>
                            <Tab>Code Thoughts</Tab>
                            <Tab>D&D Thoughts</Tab>
                            <Tab>Favorite Things</Tab>
                            <Tab>Other</Tab>
                        </TabList>
                        <TabPanel className="code-thoughts">
                            <h5 className="white">Contents:</h5>
                            <li className="white">5e Arena Updates</li>
                            <li className="white">Design and Challenges for 5e Arena</li>
                            <br></br>
                            <h5 className="white lefty">5e Arena Updates:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty"><strong><u>7/21/21 - 11:57pm:</u></strong> Been working on 5e Arena
                                        for a solid 2 weeks now, and I figure it's time for an update. As of
                                        now, I've got development react components up, meaning I've got a
                                        launch page and a battlefield, both very simple. With a loose design
                                        of the complicated logistics of combat, I decided to begin the process
                                        with the beginning of combat. Currently, I have no functionality for
                                        users actually doing anything in combat, as it's taken a while to implement
                                        the first step, rolling initiative. This doesn't mean little has been accomplished,
                                        as initiative is a skill check, meaning I needed to create the full functionality
                                        of skill checks, meaning that all skill checks are taken care of for the project.
                                        Much of this code will be reused for attacks as well, making this a very good
                                        thing to start on.
                                    </p>
                                    <br></br>
                                    <p className="white lefty">
                                        There is still one major challenge at play here. Completing the ability to make an 
                                        action is simple enough, but having them interact is going to be tricky. My best 
                                        bet right now is a very messy tag system, where any attributes that can be applied to an 
                                        event will be, and each character will get a chance to react to that. You can read more 
                                        about that issue in the 'Design and Challenges' thought. 
                                    </p>
                                </Col>
                            </Row>
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
                        <TabPanel className="dnd-thoughts">
                            <h5 className="white">Contents:</h5>
                            <li className="white">My Primary Characters</li>
                            <br></br>
                            <h5 className="white lefty">My Primary Characters</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        I am an eternal DM, so I don't get to play much. However, I love
                                        building characters, most of which I've never played. To give them
                                        some life, each and every one of my characters lives in my homebrew
                                        world as an NPC, allowing them to potentially make an appearance for
                                        a few minutes. The following are my favorites.
                                    </p>
                                    <br></br>
                                    <p className="white lefty">
                                        <strong><u>Enzo Bigboots:</u></strong> A favorite NPC among the players I've had.
                                        Enzo Bigboots on paper is a halfling Armorer Artificer, and an excellent tinkerer.
                                        His occupation is as a bootmaker, though his boots are nothing normal, with each pair
                                        having incredible design and a magical enchantment. He's extremely odd, skiddish,
                                        and played with a very high pitched voice.
                                    </p>
                                    <p className="white lefty">
                                        Enzo's story begins as an apprentice to his father, Bilbury Bigboots. A bootmaker himself
                                        and the owner of the 300 year old Bigboot's Boots store, Bilbury put pressure on Enzo to
                                        keep the Bigboots name alive. However, Enzo had an inclination to magic, and loved to
                                        make non-footwear magical objects, making boots only when his father required him. As the
                                        years went on and Enzo enterred his teenage years, he nearly abandoned bootmaking, only
                                        making one pair a year for his father for the Winter Solstice, Anivea's Christmas equivelant.
                                    </p>
                                    <p className="white lefty">
                                        Despite being one of the world's best bootmakers, Enzo's interests lied elsewhere, leading
                                        his Solstice boots for his father to become worse and worse over time. However, his father
                                        continued to wear these boots exclusively, being solely proud of his son's bootmaking. This
                                        continued until Enzo was 17, when a pack of Dire Wolves rushed into town, killing a fleeing
                                        Bilbury Bigboots. Upon examining the scene, Enzo found a torn boot that had fallen off the
                                        fleeing Bilbury about 50 feet from the place he died. From then on, Enzo reasoned that his
                                        father could have survived if he had made him a better pair of boots.
                                    </p>
                                    <p className="white lefty">
                                        Distraught from his failures, Enzo vowed to only make boots for the rest of his life. For the
                                        few years up to the present day, Enzo used his magical tinkering to make footwear exclusively.
                                        He also began to make his own pair, an incredibly powerful pair of boots called "The Bigboots".
                                        He added pieces to these boots over time, causing the boots to grow larger, eventually extending
                                        up to his legs and his torso, eventually appearing more like a suit of armor than a pair of boots.
                                        However, it would be unwise to refer to this as armor, as Enzo is incredibly insistent that he only
                                        makes boots, and constantly advertises himself as such. However, his exploits aren't in vain, as
                                        the new magic brought to Bigboot's Boots has made it a staple in Anivea.
                                    </p>
                                    <br></br>
                                    <p className="white lefty">
                                        <strong><u>Yul, The Fateless:</u></strong> A human man of 29 years, Yul lived most of his life in
                                        travel, his family and past only existing in a child's vague memory of disease and famine in the mostly
                                        destroyed city of Aegishold. Since then, he travelled, quickly discovering his exceptional ability
                                        to pick up new skills. In each city he reached, the teenage Yul would find himself quickly living
                                        in a comfortable lifestyle with a new job as a blacksmith, leatherworker, or woodcarver. He also
                                        became a masterful musician, learning many instruments and making much of his income as a performer
                                        in higher class cities. With little left to explore, Yul found a new desire during his travels,
                                        control of the arcane.
                                    </p>
                                    <p className="white lefty">
                                        Beginning at the age of 16, Yul began to study magic everywhere he went, spending all of his
                                        downtime attempting to cast spells and learning magical theory. After half a dozen years,
                                        he was an expert in magical theory, but was still entirely unable to cast a spell. His desperation
                                        led him to abandon the search, destroyed by the existence of one thing that he couldn't learn.
                                        He led a simpler life, working for a year as a tinkerer and perfoming at a local theater during the
                                        nights. He kept busy, and tried to keep the thought of magic out of his mind to little avail, as
                                        the ideas of arcane theory still constantly darted around his mind. This all changed during one of
                                        his nightly performances, where he opened for a bard who included magical effects in his performances.
                                    </p>
                                    <p className="white lefty">
                                        Yul spoke with this bard after his performance, asking him about his magical studies, hoping to gain
                                        some information about how he learned the arcane. To his surprise, the bard knew nothing of the arcane,
                                        and was able to produce magic purely through the music he creates. This struck Yul with the idea of
                                        casting spells in a more unconventional sense, through the study of acoustics. He quit his jobs and began
                                        to focus all of his time on using musical tones to influence the arcane weave. After a year of work and
                                        study, he crafted a universal theory of sonic arcana, and began to put it to the test. He created a new
                                        lute, called the "Fateful Lute", which used a series of interconnected strings and automatically moving
                                        pegs to create a device that, when played in different ways, could influence the magical weave to create
                                        spell effects.
                                    </p>
                                    <p className="white lefty">
                                        At present day, Yul has returned to his life of travelling, energized by his recent discovery, and
                                        looking for new and exciting ways to use and explore his theory.
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
                                    <p className="white lefty">
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