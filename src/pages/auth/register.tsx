import { GetServerSidePropsContext, NextPage } from 'next'
import style from "./index.module.scss";
import { TbUserPlus } from "react-icons/tb";
import Link from "next/link";
import EmailField from '../../components/login/emailFiled';
import PasswordFiled from '../../components/login/passwordFiled';
import ConfirmPasswordField from '../../components/login/confimPasswordField';
import { handleSubmitRegister } from "../../utils/helpers/hadleSubmitResisterPage";
import { validateCookies } from '../../utils/helpers/validateCookies';


const RegisterPage: NextPage = () => {

    // if (headers) window.location.replace("../../personalpage")

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmitRegister} className={style.form} >
                <TbUserPlus className={style.icon} />
                <h3>Create a new account with your email</h3>
                <div className={style.notMember}>Arledy a member? <Link href="/auth/login"><a className={style.link}>Login</a></Link></div>
                <EmailField />
                <PasswordFiled isRegister={true} />
                <ConfirmPasswordField />

                <input className={style.submit} type="submit" value="Register" />
            </form>
        </div>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);

    return headers ? {
        redirect: { destination: "../../personalpage" }
    } : {
        props: {}
    }
}

export default RegisterPage