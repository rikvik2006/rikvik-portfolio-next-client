import { NextPage } from 'next'
import style from "./index.module.scss";
import { TbUser } from "react-icons/tb";
import EmailField from "../../components/login/emailFiled";
import PasswordFiled from '../../components/login/passwordFiled';
import Link from 'next/link';
import { handleSubmitLogin } from '../../utils/helpers/handleSubmitLogin';
import ErrorAllert from "../../components/errrorAllert";

type Props = {}


const LoginPage: NextPage<Props> = () => {

    return (
        <>
            <ErrorAllert error="Wrong credentials" />
            <div className={style.container}>
                <form onSubmit={handleSubmitLogin} className={style.form} >
                    <TbUser className={style.icon} />
                    <h3>Login with your accout</h3>
                    <div className={style.notMember}>Not a member? <Link href="/auth/register"><a className={style.link}>Register</a></Link></div>
                    <EmailField />
                    <PasswordFiled isRegister={false} />

                    <input className={style.submit} type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}

export default LoginPage