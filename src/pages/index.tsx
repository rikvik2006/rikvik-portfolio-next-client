import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext, NextPage } from 'next'
import Image from 'next/image';
import style from '../utils/styles/Home.module.scss'
import { Skil } from "../utils/types";


type SkilsProp = {
    skils: Skil[];
}

const Home: NextPage<SkilsProp> = ({ skils }) => {

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

            <div className={style.heroHead}>
                <div className="spacer layer1" />
                <div className={style.heroContent}>
                    <h1>Hi, i am Riccardo Bussano a 15-year-old <div className="colorGradient">aspiring Software Engineer.</div></h1>
                    <p>
                        Hi i am Riccardo an Italian junior developer, based in Turin.<br />
                        I love build web apps, backand side, and everything in beetween.
                    </p>
                </div>
            </div>
            <hr />
            <div className={style.content}>
                <h1>About <span className="colorGradient">Me</span></h1>
                <div className={style.aboutMe}>
                    <Image className={style.cardTall}
                        src={"/logoHighRes.png"}
                        alt="me.png"
                        width={1000}
                        height={1000}
                    />

                    <p>I started programming at the age of 11, starting with small electronic boards like arduino, from that point programming became one of my greatest passions along with video games. Another important step for my programming career was the discovery of DiscordJs a library that is used to communicate with the discord api and thanks to this you can create fantastic bots. Creating bots I became passionate about and my bot was my first big success. Thanks to this my knowledge expanded and from that point I decided to learn the backend side of websites, this topic I am also very passionate about. Besides that I am also passionate about electronics, game developing, 3D modeling and video making</p>

                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                    <p>Ciao</p>
                </div>

                <h1>My <span className="colorGradient">Skills</span></h1>
                <div className={style.mySkils}>
                    {/* {skils.map((skil) => (
                        <SkilsComponent key={skil.id} skil={skil} />
                    ))} */}
                    <div className={style.iconContainer}>
                        <i className="devicon-html5-plain" />
                        <div>HTML</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-css3-plain" />
                        <div>CSS</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-javascript-plain" />
                        <div>Javascipt</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-typescript-plain" />
                        <div>TypeScript</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-react-original" />
                        <div>React | Frontend</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-nextjs-original" />
                        <div>NextJs | Frontend</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-bootstrap-plain" />
                        <div>Bootstrap | Frontend</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-sass-original" />
                        <div>Sass | Frontend</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-nodejs-plain" />
                        <div>NodeJs | Backend</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-express-original" />
                        <div>ExpressJs | Backend</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-php-plain" />
                        <div>PHP | Backend</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-mongodb-plain" />
                        <div>MongoDB | Database</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-mysql-plain" />
                        <div>MySQL | Database</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-git-plain" />
                        <div>git | CD/CI</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-github-original" />
                        <div>GitHub | CD/CI</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-firebase-plain" />
                        <div>Firebase | DevOps</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-heroku-original" />
                        <div>Heroku | DevOps</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-googlecloud-plain" />
                        <div>GoogleCloud | DevOps</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-bash-plain" />
                        <div>Bash</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-solidity-plain" />
                        <div>Solidity | WEB3</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-jest-plain" />
                        <div>JestJs | Testing</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-python-plain" />
                        <div>Python</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-csharp-plain" />
                        <div>Csharp</div>
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-discordjs-plain" />
                        <div>DiscordJS</div>
                    </div>
                </div>
            </div>
        </>



    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

    const { data: skils } = await axios.get<SkilsProp>("http://localhost:3001/api/skils/")

    return {
        props: { skils }
    }
}

export default Home;
