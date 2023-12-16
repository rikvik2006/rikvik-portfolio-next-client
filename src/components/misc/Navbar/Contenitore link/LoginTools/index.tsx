import axios from 'axios';
import Link from 'next/link'
import { FC, useState, useEffect } from 'react';
import { TbLogin, TbMenu2, TbRocket } from "react-icons/tb/";
import { getUserOrFalse } from '../../../../../utils/helpers/getUserOrFalse';
import { User } from '../../../../../utils/types';
import style from "./index.module.scss";
import LoginOrPersonalPage from './loginOrPersonalPage';
import toast from "react-hot-toast"

type Props = {
    toggleMobileNavbar: (() => void) | undefined;
}

type WindowSizeType = {
    innerWidth: number;
    innerHeight: number;
}

const LoginTools: FC<Props> = ({ toggleMobileNavbar }) => {

    const [user, setUser] = useState<User | boolean>(false);
    const [windowSize, setWindowSize] = useState<WindowSizeType>({ innerWidth: 0, innerHeight: 0 });


    useEffect(() => {
        axios.get<User>("http://localhost:3001/api/user", {
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


    // function getWindowSize() {
    //     console.log("⚠️ Window", window)
    //     if (typeof window !== "undefined") {
    //         const { innerHeight, innerWidth } = window
    //         return { innerHeight, innerWidth }
    //     }

    //     return { innerHeight: 1440, innerWidth: 2560 }
    // }

    console.log()

    return (


        <div>
            <Link href="#" className={style.icons}>
                <a onClick={notAvailable}>
                    <TbRocket className={style.icon} />
                </a>
            </Link>
            {windowSize.innerWidth > 750 ?
                <LoginOrPersonalPage user={user} /> :
                <button onClick={toggleMobileNavbar}><TbMenu2 /></button>
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