import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext, NextPage } from 'next'
import SkilsComponent from '../components/skils';
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
                    <h1>Hi i am Riccardo Bussano a 15 <div className="colorGradient">full stack web developer apprendice</div></h1>
                    <p>
                        Hi i am Riccardo an Italian junior developer, based in Turin.<br />
                        I love build web apps, backand side, and everything in beetween.
                    </p>
                </div>
            </div>
            <hr />
            <div className={style.content}>
                <h1>My <span className="colorGradient">Skills</span></h1>
                <div className={style.mySkils}>
                    {/* {skils.map((skil) => (
                        <SkilsComponent key={skil.id} skil={skil} />
                    ))} */}

                    <div className={style.iconContainer}>
                        <i className="devicon-html5-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-css3-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-javascript-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-typescript-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-react-original" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-nextjs-original" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-bootstrap-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-sass-original" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-express-original" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-php-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-mongodb-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-mysql-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-git-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-github-original" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-firebase-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-heroku-original" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-googlecloud-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-bash-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-solidity-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-jest-plain" />
                    </div>

                    <div className={style.iconContainer}>
                        <i className="devicon-python-plain" />
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
