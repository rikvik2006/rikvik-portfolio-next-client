import { NextPage } from 'next'
import style from "./index.module.scss";
import { TbUserPlus } from "react-icons/tb";
import Link from "next/link";
import EmailField from '../../components/login/emailFiled';
import PasswordFiled from '../../components/login/passwordFiled';

type Props = {}


const RegisterPage: NextPage<Props> = () => {
    return (
        <div className={style.container}>
            <form action="http://localhost:3001/api/auth/login" method='post' className={style.form} >
                <TbUserPlus className={style.icon} />
                <h3>Create a new account with your email</h3>
                <div className={style.notMember}>Arledy a member? <Link href="/auth/register"><a className={style.link}>Login</a></Link></div>
                <EmailField />
                <PasswordFiled />
                <PasswordFiled />

                <input className={style.submit} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default RegisterPage