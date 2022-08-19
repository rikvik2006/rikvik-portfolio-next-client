import { NextPage } from 'next'
import style from "./index.module.scss";
import { TbUser } from "react-icons/tb";
import EmailField from "../../components/login/emailFiled";
import PasswordFiled from '../../components/login/passwordFiled';

type Props = {}


const Page: NextPage<Props> = () => {

    return (
        <div className={style.container}>
            <form action="http://localhost:3001/api/auth/login" method='post' className={style.form} >
                <TbUser className={style.icon} />
                <h3>Login with your accout</h3>
                <EmailField />
                <PasswordFiled />

                <input className={style.submit} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Page