import { NextPage } from 'next'
import style from "./index.module.scss";
import ErrorAllert from "../../components/errrorAllert";
import EmailField from '../../components/login/emailFiled';
import PasswordFiled from '../../components/login/passwordFiled';
import { handleSubmitLoginContinue } from '../../utils/helpers/handleSubmitLogin';
import Link from 'next/link';
import { TbUser } from 'react-icons/tb';
import NameSurname from '../../components/login/nameSurname';

type Props = {}


const ContinueLogin: NextPage<Props> = () => {
    return (
        <>
            <ErrorAllert error="Wrong credentials" />
            <div className={style.container}>
                <form onSubmit={handleSubmitLoginContinue} className={style.form} >
                    <TbUser className={style.icon} />
                    <h3>Set your information</h3>
                    <NameSurname />
                    <PasswordFiled isRegister={false} />

                    <input className={style.submit} type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}

export default ContinueLogin