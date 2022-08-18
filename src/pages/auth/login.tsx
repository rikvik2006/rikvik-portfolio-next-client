import { NextPage } from 'next'
import style from "./index.module.scss";
import { TbUser } from "react-icons/tb";

type Props = {}


const Page: NextPage<Props> = () => {
    return (
        <div className={style.container}>
            <form action="http://localhost:3001/api/auth/login" method='post' className={style.form}>
                <TbUser className={style.icon} />
                <h3>Login with your accout</h3>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className={style.vaildEmail} type="email" name="email" id="email" placeholder='jon.doe@gmail.com' required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>

                <input className={style.submit} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Page