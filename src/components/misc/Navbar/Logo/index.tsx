import { NextComponentType } from 'next'
import Image from "next/image"
import Link from 'next/link';
import style from "./index.module.scss";

type Props = {

}




const Logo: NextComponentType<Props> = () => {
    return (
        <div className={style.logoContainer}>
            <Link href="/">
                <a>
                    <Image
                        className={style.logo}
                        src="/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </a>
            </Link>
        </div>
    )
}

export default Logo