import { FC, useContext } from "react";
import Link from 'next/link';
import style from "./index.module.scss";
import { MdDesignServices } from "react-icons/md/"
import { TbBrandGithub, TbTags, TbMoodHappy } from "react-icons/tb";
import toast from "react-hot-toast"
import { ConditionalRenderingContext } from "../../../../../utils/contexts/conditionalRendering";

type Props = {}


const Links: FC<Props> = () => {
    const notAvailable = () => toast.error("Not available at the moment");
    const { renderServicies } = useContext(ConditionalRenderingContext);

    return (
        <div className={style.links}>
            <Link href="/#about_me">
                <a className={style.link}>
                    <TbMoodHappy className={style.icon} />
                    About me
                </a>
            </Link>

            <Link href="#">
                <a className={style.link} onClick={notAvailable}>
                    <MdDesignServices className={style.icon} />
                    Projects
                </a>
            </Link>

            {renderServicies && <Link href="/services">
                <a className={style.link}>
                    <TbTags className={style.icon} />
                    Services
                </a>
            </Link>}

            <Link href="https://github.com/rikvik2006">
                <a className={style.link} target="_blank">
                    <TbBrandGithub className={style.icon} />
                    GitHub
                </a>
            </Link>
        </div>
    )
}

export default Links