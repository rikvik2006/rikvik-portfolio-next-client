import { FC } from 'react'
import { User } from "../../utils/types"
import style from "./index.module.scss";
import SVGConponent from "./SVGComponent"


type Props = {
    user: User;
}


const AvatarContainer: FC<Props> = ({ user }) => {
    return (
        <div className={style.avatarContainer}>
            <div className={style.subAvatarContainer}>

                <div className={style.avatar}>
                    <SVGConponent avatar={user.avatar} />
                </div>
                <div className={style.informationContainer}>
                    <h3>{`${user.name} ${user.surname}`}</h3>
                    <p>{user.username}</p>
                </div>
            </div>
        </div>
    )
}

export default AvatarContainer