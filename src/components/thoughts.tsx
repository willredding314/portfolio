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
                    <Tabs className="tabset" defaultIndex={0}>
                        <TabList>
                            <Tab>Essay: The Perfect Viewer Sport</Tab>
                            <Tab>General Recommendations</Tab>
                            <Tab>Barbershop</Tab>
                        </TabList>
                        <TabPanel className="barbershop-thoughts">
                            <h5 className="white lefty">The Perfect Viewer Sport:</h5>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="11">
                                    <p className="white lefty">
                                        As an American, I'm never in a lack of sports entertainment. Having four major sports leagues, there's always at least one that's active and providing entertainment, but I've always wondered what the need was for all of these sports. And with so many, there must be one that is the best? I've set out to find this answer.
                                    </p>
                                    <p className="white lefty">
                                        To begin, I've assembled a list of candidates, each having the potential to claim the top spot. They are as follows.
                                        <ul>
                                            <li>Football: Perhaps the most popular game in America, and a sporting spectacle. With an effective mix of brutality, warlike strategy, and big moments, the game clearly captures America's interest. </li>
                                            <li>Baseball: America's pastime. Baseball is a relaxed viewership sport, and is certainly the most romanticized game in America. </li>
                                            <li>Basketball: A fast-paced game filled with glory moments. Basketball is perhaps the most highlight-able game, and additionally serves as a vehicle of pop culture, enhancing its relevance. </li>
                                            <li>Hockey: A rugged, unique game. While less popular than the other major American sports, it maintains a cult-like audience and a storied history. </li>
                                            <li>Soccer: While not popular in America, soccer is the world's game, and should certainly be considered. </li>
                                        </ul>
                                    </p>
                                    <p className="white lefty">
                                        A few sports that I enjoy were not included for consideration.
                                        <ul>
                                            <li>Motorsports: While I am a Formula 1 fan, motorsports include a complexity (primarily, the construction of a car) that separates itself from these sports. </li>
                                            <li>Combat sports: Another sport I enjoy on occasion is MMA, but the UFC exists in a different kind of athletic sphere, as there is no season or regularity. </li>
                                            <li>Non-team sports: Just to allow for comparison, I've removed all sports that are not team-based. This most notably includes tennis and golf, but also encompasses lots of sports that would appear in Olympic events. </li>
                                        </ul>
                                    </p>
                                    <p className="white lefty">
                                        With the contenders determined, let's begin.
                                    </p>
                                    <p className="white lefty">
                                        In finding the best viewership sport, the first thing I wanted to prioritize was simplicity. We want our sport to be accessible to a viewer, such that anyone can enjoy the game regardless of their level of knowledge. Imagine the simplest game possible. It's probably a team sport, where some object needs to get into a goal. Now add in some specifics and the fact that you can't tough the ball with your hands, and you're at soccer. For being the simplest, soccer takes an early lead.
                                    </p>
                                    <p className="white lefty">
                                        However, if you've ever watched a soccer game, you've surely had many moments of incredible frustration with the structure of the game. Despite my personal love for soccer, I find that these issues may make it the worst game to watch.
                                    </p>
                                    <p className="white lefty">
                                        First, soccer is an incredibly soft game. Sometimes it seems anytime two people make contact, they both have to pretend to be incredibly injured, only to get back up seconds later. We want a game that's tougher, and will nominate football as a result.
                                    </p>
                                    <p className="white lefty">
                                        Second, soccer is unbearably slow. During most of a game, there is no threat of something interesting occurring, and many games will end completely scoreless. Nowadays, I mostly consume soccer in YouTube highlight videos, getting every interesting event in a game in under 10 minutes. To optimize for scoring opportunities, we'll also nominate basketball.
                                    </p>
                                    <p className="white lefty">
                                        Despite soccer being very slow, it's also incredibly continuous. Even though there's next to no chance of an important event occurring, you can't leave to go the bathroom during a match, as they play two continuous 45 minute spans. This makes the game almost impossible to watch leisurely. A strong counterexample to this is baseball, the perfect leisure game.
                                    </p>
                                    <p className="white lefty">
                                        Now let's examine our nominees, with each optimizing for the faults of another game.
                                    </p>
                                    <p className="white lefty">
                                        Football is an exciting game that is tough beyond compare. No one flops in football, as contact and violence are a part of the game. There is also a fair level of excitement, as there is at minimum a remote chance of scoring on every single play. However, football is a scarce game, as the season only includes 17 games for each team. The sport is also unbearably complicated and riddled with long-term injury issues, making it a hard sell to new viewers. Our remaining nominees, basketball and baseball, account for this.
                                    </p>
                                    <p className="white lefty">
                                        Baseball is a much simpler game, and includes just an unbelievable amount of games in a season. It's casually watchable and does not fall victim to the injury cycle like football, but comes at the cost of being just a truly boring sport. The vast majority of the game is inactive play, waiting for the pitcher to throw, the batter to walk up, or the players to change positions. Maybe it's nice to watch while doing something else, and it's certainly a fun game to attend, but in no way would I consider the game entertainment.
                                    </p>
                                    <p className="white lefty">
                                        Basketball serves as a much more exciting game, with long segments of play. There's plenty of games and tons of scoring, making it seem like a perfect option. However, despite its mass appeal, I'd argue its excess of scoring actually works to its own hindrance. With so much scoring, the points start to matter less and less. In most games, there is no single play in a game that can be considered absolutely meaningful to the game's result. Basketball is also a close second to soccer in its use of embellishment, with players often making plays with the intention of drawing a foul, which I consider uninteresting play.
                                    </p>
                                    <p className="white lefty">
                                        This leaves us with one sport. The perfect viewer sport, at least by my point of view, is hockey.
                                    </p>
                                    <p className="white lefty">
                                        To start, hockey optimizes the balance of continuous play and effective breaks. With three 20-minute periods, and each period including just 2 commercial breaks, there's ample opportunity to go to the bathroom and grab a drink, but you don't find yourself constantly waiting for the ads to stop.
                                    </p>
                                    <p className="white lefty">
                                        Beyond this, hockey has the highest rate of genuine opportunity for important moments, and a relatively high rate of scoring. While basketball has so many points they become unmeaningful, and soccer has almost no opportunities to score, hockey sits in a unique situation where, for about 70% of the game, someone could score a goal in mere seconds that radically changes the game. This puts the viewer in the situation where they are constantly engaged. You can't take a few seconds to look away, even if the puck is right in the middle of the ice. In under 5 seconds, Connor McDavid could dance his way through the entire opposing team and score the greatest goal anyone has ever seen.
                                    </p>
                                    <p className="white lefty">
                                        Hockey is also tough, and expresses this toughness in a way that optimizes for entertainment. Not only is it a physical game, but it also includes the fan favorite side-show of a fight. How great is that? Two guys who are pissed at each other can just start throwing hands, and it's a sanctioned aspect of the game. Beyond that, whether or not someone is bleeding is a genuine game mechanic that determines the severity of a penalty. I consider this perfect game building, and these factors should be incorporated in every sport.
                                    </p>
                                    <p className="white lefty">
                                        The single thing that hockey excels at above all other sports, however, is handling penalties. Penalties are almost universally the least interesting part of any game. In just about every situation in just about every sport, I'd find the game more interesting if a penalty did not occur. In basketball, we have to watch guys stand around for a while so that someone can shoot an uncontested shot - not interesting. Even worse, in football there is no gamified mechanic. The ball simply changes its starting spot. I'd much rather watch a 15 yard play than a personal foul followed by an automatic 15.
                                    </p>
                                    <p className="white lefty">
                                        This is most questionable in soccer, where some would say a penalty kick or a set piece is in fact very exciting. While they are fun, I'd venture to say most of the penalties occur in situations that would have been exciting on their own. I'd much rather watch a natural play with a long crossing pass or a deep shot than have to wait 2 minutes for the same play to get set up. More severely, any real exciting moment, where players are very close to the goal, could instantly turn into a penalty kick, which is nearly a guaranteed goal.
                                    </p>
                                    <p className="white lefty">
                                        And here lies the issue with penalties in soccer, they results have wildly inconsistent values. With a penalty kick being a near automatic goal, players are not incentivized to score when within the goalie box. Instead, as if on cue, they take a dive, because you're much more likely to score that way. A perfect penalty system would include a valuable consequence, one that disincentives illegal acts, but one that is not so powerful as to create embellishment and enhances the excitement of the game.
                                    </p>
                                    <p className="white lefty">
                                        And that's what hockey does. A penalty puts a man in the penalty box, where he shamefully sits in timeout while the opponents get a moment of all-out attack. It's such an attacking opportunity, in fact, that most would say it's more enjoyable than the actual game. And while this is powerful, hockey referees are also very willing to call embellishments, even negating real penalties because the victim played it too dramatically.
                                    </p>
                                    <p className="white lefty">
                                        The toughness of hockey also reenters play when discussing what counts as a penalty, and for this I have one major gripe. Because of the incentive for penalties in both basketball and soccer, we wind up in situations I call “stand still fouls”, meaning a situation where a person does not move at all, and is still called for a penalty. While, by the book, this really shouldn't happen in any game, it does occur in practice when players intentionally devise situations that lead to fouls being called. We see basketball players jumping into defenders on shots, and soccer players run into players legs to get trips. Hockey includes no such soft foul. Players can get away with a lot of hacking, slashing, and dirty hitting before a penalty gets called, and I think that leaves you walking away less frustrated with the game.
                                    </p>
                                    <p className="white lefty">
                                        The final component that makes hockey a marvelous game is the culture of the players. This mostly comes from my frustration with ego in sports, with most of this coming from soccer. If you ever watch a goal scored in soccer, the aftermath is always exactly the same every time. The goal scorer runs to the corner flag alone, does a little celebration move, basks in the cheers of the crowd, and then turns to face his teammates. Even in moments where another player makes several beautiful moves to create the perfect pass to give the scorer an unmissable goal, the scorer celebrates alone. Compare this to hockey, where plays like this happen often. In this situation, the scorer does not accept a moment of glory. He finds his teammate, points to him, tells the crowd “I didn't do a damn thing on this one”, and the team celebrates together.
                                    </p>
                                    <p className="white lefty">
                                        Beyond this, there is a much greater sense of loyalty in the world of hockey. When a team drafts a really excellent player, it's more than likely that that player will stay there for almost all of his career. In a different game (looking at you, basketball), an excellent player drafted by a franchise will likely be gone before the team can accomplish anything. I think this is bidirectional in hockey, as the player is just a loyal to the team as the team is to the player. With hockey being the only sport with a truly hard salary cap, no other team can afford a player that much more than his original team, and his team has the respect for the player to give him what he's worth. Because of this, players maintain their tenure and become real figures of the community, and don't become the guy that ends up as the hero of another city down the line.
                                    </p>
                                    <p className="white lefty">
                                        And finally, there's a bit of magic in the Stanley Cup that exists in no other sport. People play other sports to win a championship, but people play hockey to win the cup, and there's something very special about that.
                                    </p>
                                    <p className="white lefty">
                                        And that's all I got. I hope this is encouraging to watch more hockey. I write this with what I believe to be an unbiased perspective. I never played hockey, and have only discovered the greatness of the game in recent years. It's grown on me very quick, and I trust it'll do the same for you.
                                    </p>
                                </Col>
                            </Row>
                        </TabPanel>
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