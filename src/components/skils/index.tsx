import { FC } from 'react'
import { Skil } from '../../utils/types';
import style from "./index.module.scss";

type SkilProps = {
    skil: Skil
}


const SkilsComponent: FC<SkilProps> = ({ skil }) => {

    const ImageTag: any = `${skil.icon}`

    return (
        <div className={style.container}>
            <ImageTag className={style.icon} />
            <div>{skil.name}</div>
        </div>
    )
}

export default SkilsComponent