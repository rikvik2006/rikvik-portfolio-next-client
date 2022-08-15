import { NextComponentType } from 'next'
import Link from 'next/link';
import style from "./index.module.scss";

type Props = {}


const Links: NextComponentType<Props> = () => {
    return (
        <div className={style.links}>
            <Link href="#"><a className={style.link}>About me</a></Link>
            <Link href="#"><a className={style.link}>Progects</a></Link>
            <Link href="#"><a className={style.link}>Services</a></Link>
            <Link href="#"><a className={style.link}>GitHub</a></Link>
        </div>
    )
}

export default Links