import axios from 'axios';
import Link from 'next/link'
import { FC, useState, useEffect } from 'react';
import { TbLogin, TbRocket } from "react-icons/tb/";
import { getUserOrFalse } from '../../../../../utils/helpers/getUserOrFalse';
import { User } from '../../../../../utils/types';
import style from "./index.module.scss";
import LoginOrPersonalPage from './loginOrPersonalPage';
import toast from "react-hot-toast"

type Props = {

}

const LoginTools: FC<Props> = () => {

    const [user, setUser] = useState<User | boolean>(false);

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
    return (

        <div>
            <Link href="#" className={style.icons}>
                <a onClick={notAvailable}>
                    <TbRocket className={style.icon} />
                </a>
            </Link>
            <LoginOrPersonalPage user={user} />
        </div>
    )
}

export default LoginTools