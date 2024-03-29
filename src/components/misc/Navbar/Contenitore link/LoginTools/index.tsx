import axios from 'axios';
import Link from 'next/link'
import { FC, useState, useEffect, RefObject } from 'react';
import { TbLogin, TbMenu2, TbRocket } from "react-icons/tb/";
import { getUserOrFalse } from '../../../../../utils/helpers/getUserOrFalse';
import { User } from '../../../../../utils/types';
import style from "./index.module.scss";
import linksStyle from "../Links/index.module.scss"
import LoginOrPersonalPage from './loginOrPersonalPage';
import toast from "react-hot-toast"
import { APIBaseUrl } from '../../../../../utils/constants';

type Props = {
    navbarRef: RefObject<HTMLDivElement> | undefined;
}

type WindowSizeType = {
    innerWidth: number;
    innerHeight: number;
}

const LoginTools: FC<Props> = ({ navbarRef }) => {

    const [user, setUser] = useState<User | boolean>(false);
    const [windowSize, setWindowSize] = useState<WindowSizeType>({ innerWidth: 1920, innerHeight: 1080 });


    useEffect(() => {
        axios.get<User>(`${APIBaseUrl}/api/user`, {
            withCredentials: true,
        })
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const notAvailable = () => toast.error("Premium subscription isn't available at the moment")
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        if (typeof window !== "undefined") {

            window.addEventListener("resize", handleWindowResize);

            return () => {
                window.removeEventListener("resize", handleWindowResize);
            }
        }
    }, [])

    // Get window size on first render
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        handleWindowResize();
    }, [])

    const toggleMobileNavbar = () => {
        navbarRef!.current?.classList.toggle(linksStyle.toggleNav);
    }

    return (
        <div className={style.iconsContainer}>
            <Link href="#" className={style.icons}>
                <a onClick={notAvailable}>
                    <TbRocket className={style.icon} />
                </a>
            </Link>
            {windowSize.innerWidth > 750 ?
                <LoginOrPersonalPage user={user} /> :
                <button className={`${style.toggleNav}`} onClick={toggleMobileNavbar}><TbMenu2 className={`${style.icon}`} /></button>
            }
        </div>
    )

}

function getWindowSize() {
    if (window === undefined) return { innerWidth: 0, innerHeight: 0 }
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight }
}


export default LoginTools