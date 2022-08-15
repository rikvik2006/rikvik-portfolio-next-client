import { NextComponentType } from 'next'
import Image from "next/image"
import style from "./index.module.scss";

type Props = {

}




const Logo: NextComponentType<Props> = () => {
    return (
        <div className={style.logoContainer}>
            <Image
                className={style.logo}
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
            />
        </div>
    )
}

export default Logo