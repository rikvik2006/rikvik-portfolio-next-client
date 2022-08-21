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
                <h1>My <span className="colorGradient">Skils</span></h1>
                <div className={style.mySkils}>
                    {skils.map((skil) => (
                        <SkilsComponent key={skil.id} skil={skil} />
                    ))}
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
