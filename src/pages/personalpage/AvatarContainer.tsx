import Image from 'next/image';
import { FC } from 'react'
import { User } from "../../utils/types"
import style from "./index.module.scss";


type Props = {
    user: User;
}


const AvatarContainer: FC<Props> = ({ user }) => {
    return (
        <div className={style.avatarContainer}>
            <div className={style.subAvatarContainer}>

                <Image className={style.avatar}
                    src={user.avatar}
                    alt={user.avatar}
                    height={290}
                    width={290}
                />
                <div className={style.informationContainer}>
                    <h3>Riccardo Bussano</h3>
                    <p>rikvik2006</p>
                </div>
            </div>
        </div>
    )
}


export default AvatarContainer