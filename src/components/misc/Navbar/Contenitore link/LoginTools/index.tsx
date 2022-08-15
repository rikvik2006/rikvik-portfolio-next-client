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
                <TbRocket className={style.icon} />
            </Link>
            <Link href="#" className={style.icons}>
                <TbLogin className={style.icon} />
            </Link>
        </div >
    )
}

export default LoginTools