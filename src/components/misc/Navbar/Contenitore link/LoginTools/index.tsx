import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TbLogin, TbRocket } from "react-icons/tb/";
import style from "./index.module.scss";

type Props = {}


const LoginTools: NextComponentType<Props> = () => {
    return (
        <div>
            <Link href="#" className={style.icons}>
                <a>
                    <TbRocket className={style.icon} />
                </a>
            </Link>
            <Link href="/auth/login" className={style.icons}>
                <a>
                    <TbLogin className={style.icon} />
                </a>
            </Link>
        </div >
    )
}

export default LoginTools