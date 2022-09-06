import Link from 'next/link'
import { FC } from 'react';
import { TbLogin, TbRocket } from "react-icons/tb/";
import { getUserOrFalse } from '../../../../../utils/helpers/getUserOrFalse';
import { User } from '../../../../../utils/types';
import style from "./index.module.scss";
import LoginOrPersonalPage from './loginOrPersonalPage';

type Props = {
    user: User;
}

const LoginTools: FC<Props> = ({ user }) => {

    return (
        <div>
            <Link href="#" className={style.icons}>
                <a>
                    <TbRocket className={style.icon} />
                </a>
            </Link>
            <LoginOrPersonalPage user={user} />
        </div >
    )
}

export default LoginTools