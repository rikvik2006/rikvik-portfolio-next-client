import { FC } from 'react'
import style from "./index.module.scss";

const FooterComponet: FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <p>© 2022 | Designed & Coded with 🧡 by Riccardo Bussano (aka rikvik2006)</p>
            </div>
        </footer>
    )
}

export default FooterComponet