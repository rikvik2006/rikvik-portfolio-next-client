import { GetServerSidePropsContext, NextPage } from 'next'
import style from "./index.module.scss";
import ErrorAllert from "../../components/errrorAllert";
import EmailField from '../../components/login/emailFiled';
import PasswordFiled from '../../components/login/passwordFiled';
import Link from 'next/link';
import { TbUser } from 'react-icons/tb';
import NameSurname from '../../components/login/nameSurname';
import UsernameField from '../../components/login/usernameField';
import { handleSubmitRegisterContinue } from '../../utils/helpers/hadleSubmitResisterPage';
import { validateCookiesContinueRegister } from '../../utils/helpers/validateCookies';

type Props = {}


const ContinueLogin: NextPage<Props> = () => {
    return (
        <>
            <ErrorAllert error="An error occured, retry leater" />
            <div className={style.container}>
                <form onSubmit={handleSubmitRegisterContinue} className={style.form} >
                    <TbUser className={style.icon} />
                    <h3>Set your information</h3>
                    <NameSurname />
                    <UsernameField />

                    <input className={style.submit} type="submit" value="Save information" />
                </form>
            </div>
        </>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const headers = validateCookiesContinueRegister(context);

    return headers ? {
        props: {}
    } : {
        redirect: { destination: "/auth/register" }
    }
}

export default ContinueLogin