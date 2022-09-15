import Link from "next/link";
import { FC, ReactElement } from "react";
import { TbLogin, TbUserCircle } from "react-icons/tb";
import { User } from "../../../../../utils/types";
import style from "./index.module.scss";

type UserProp = {
    user: User | boolean;
}


const LoginOrPersonalPage: FC<UserProp> = ({ user }) => {

    const personalPageLink = "/personalpage"
    const loginLink = "/auth/login"
    console.log("---User---")
    console.log(user);

    return (
        <Link href={user ? personalPageLink : loginLink} className={style.icons}>
            <a>
                {user ? <TbUserCircle className={style.icon} /> : <TbLogin className={style.icon} />}
            </a>
        </Link>
    )
}

export default LoginOrPersonalPage