import { FC } from "react";
import Link from 'next/link';
import style from "./index.module.scss";
import { MdDesignServices } from "react-icons/md/"
import { TbBrandGithub, TbTags, TbMoodHappy } from "react-icons/tb";


type Props = {}


const Links: FC<Props> = () => {
    return (
        <div className={style.links}>
            <Link href="/">
                <a className={style.link}>
                    <TbMoodHappy className={style.icon} />
                    About me
                </a>
            </Link>

            <Link href="#">
                <a className={style.link}>
                    <MdDesignServices className={style.icon} />
                    Projects
                </a>
            </Link>

            <Link href="/services">
                <a className={style.link}>
                    <TbTags className={style.icon} />
                    Services
                </a>
            </Link>

            <Link href="https://github.com/rikvik2006">
                <a className={style.link}>
                    <TbBrandGithub className={style.icon} />
                    GitHub
                </a>
            </Link>
        </div>
    )
}

export default Links