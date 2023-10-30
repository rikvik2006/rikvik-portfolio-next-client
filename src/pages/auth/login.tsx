import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import style from "./index.module.scss";
import { TbUser } from "react-icons/tb";
import EmailField from "../../components/login/emailFiled";
import PasswordFiled from '../../components/login/passwordFiled';
import Link from 'next/link';
import { handleSubmitLogin } from '../../utils/helpers/handleSubmitLogin';
import ErrorAllert from "../../components/errrorAllert";
import { validateCookies } from '../../utils/helpers/validateCookies';
import { useContext } from 'react';
import { ConditionalRenderingContext } from '../../utils/contexts/conditionalRendering';

type Props = {
    renderServicies: boolean;
}

const LoginPage: NextPage<Props> = ({ renderServicies }) => {
    const { setRenderServicies } = useContext(ConditionalRenderingContext)
    setRenderServicies(renderServicies);

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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    //TO FIX: If user modify the session, the login can't be access, beccouse the sessions exist but isn't valid
    //Step to reproduce, LogIn, Modify the connect.sid session, try to access to the login page

    const headers = validateCookies(context);
    const renderServices = process.env.RENDER_SERVICES == "true";

    return headers ? {
        redirect: { destination: "../../personalpage" }
    } : {
        props: { renderServices }
    }
}

export default LoginPage