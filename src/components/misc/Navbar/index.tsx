import { FC } from "react";
import style from "./index.module.scss";
import Logo from "./Logo";
import LinkContainer from "./Contenitore link";
import { User } from '../../../utils/types';

type Props = {
    user: User;
}

const Navbar: FC<Props> = ({ user }) => {
    return (
        <div className={style.topNav}>
            <Logo />
            <LinkContainer user={user} />
        </div>
    )
}

export default Navbar