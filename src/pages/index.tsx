import type { NextPage } from 'next'
import style from '../utils/styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <>
            <div className={style.homeHead}>
                <div className={style.headContent}>
                    <h1>Hi i am Riccardo Bussano a 15 <span className="colorGradient">full stack web developer apprendice</span></h1>
                </div>
                <div className={style.headContent}>Ciao</div>
            </div>
            <hr />
        </>

    )
}

export default Home;
