import { FC } from "react";
import style from "./index.module.scss";
import Logo from "./Logo";
import LinkContainer from "./Contenitore link";
import { User } from '../../../utils/types';

type Props = {
}

const Navbar: FC<Props> = () => {
    return (
        <div className={style.topNav}>
            <Logo />
            <LinkContainer />
        </div>
    )
}

export default Navbar