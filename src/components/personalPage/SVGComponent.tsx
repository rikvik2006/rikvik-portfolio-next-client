import Image from 'next/image'
import { FC, useEffect } from 'react'
import style from "./index.module.scss";

type Props = {
    avatar: string;
}


const SVGConponent: FC<Props> = ({ avatar }) => {
    return (
        <img className={style.avatar}
            src={avatar}
            alt="Avatar"
        />
    )
}

export default SVGConponent