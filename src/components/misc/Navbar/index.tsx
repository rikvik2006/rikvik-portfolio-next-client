import { NextComponentType } from 'next'
import style from "./index.module.scss";
import Logo from "./Logo";
import LinkContainer from "./Contenitore link";


const Navbar: NextComponentType = () => {
    return (
        <div className={style.topNav}>
            <Logo />
            <LinkContainer />
        </div>
    )
}

export default Navbar