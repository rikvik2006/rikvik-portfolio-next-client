import { FC, RefObject, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./index.module.scss";
import { MdDesignServices } from "react-icons/md/";
import {
    TbBrandGithub,
    TbTags,
    TbMoodHappy,
    TbArrowUpRight,
} from "react-icons/tb";
import toast from "react-hot-toast";
import { ConditionalRenderingContext } from "../../../../../utils/contexts/conditionalRendering";

type Props = {
    getNavbarRef: (ref: RefObject<HTMLDivElement>) => void;
};

const Links: FC<Props> = ({ getNavbarRef }) => {
    const notAvailable = () => toast.error("Not available at the moment");
    const { renderServicies } = useContext(ConditionalRenderingContext);
    const linksContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getNavbarRef(linksContainerRef);
    });

    const toggleMobileNavbar = () => {
        linksContainerRef.current?.classList.toggle(style.toggleNav);
    };

    return (
        <>
            <div ref={linksContainerRef} className={`${style.links}`}>
                <Link href="/#about_me">
                    <a onClick={toggleMobileNavbar} className={style.link}>
                        <TbMoodHappy className={style.icon} />
                        About me
                    </a>
                </Link>

                <Link href="/projects">
                    <a onClick={toggleMobileNavbar} className={style.link}>
                        <MdDesignServices className={style.icon} />
                        Projects
                    </a>
                </Link>

                {renderServicies && (
                    <Link href="/services">
                        <a onClick={toggleMobileNavbar} className={style.link}>
                            <TbTags className={style.icon} />
                            Services
                        </a>
                    </Link>
                )}

                <Link href="https://github.com/rikvik2006">
                    <a
                        onClick={toggleMobileNavbar}
                        className={`${style.redirectContainer} ${style.link}`}
                        target="_blank"
                    >
                        <TbBrandGithub className={style.icon} />
                        GitHub
                        <TbArrowUpRight className={style.redirectIcon} />
                    </a>
                </Link>
            </div>
        </>
    );
};

export default Links;
