import type { GetStaticPropsContext, NextPage } from 'next'
import style from '../utils/styles/Home.module.scss'


type SkilType = {
    icon: string;
    name: string;
}

type SkilsProp = {
    skils: SkilType[];
}

const Home: NextPage = () => {

    const Icon: any = `${skils.icon}`

    return (
        <>
            <div className={style.heroHead}>
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
                    <Icon>Ciao</Icon>

                </div>
            </div>
        </>

    )
}

export async function getStaticProps(context: GetStaticPropsContext) {


    return {
        props: {}
    }
}

export default Home;
