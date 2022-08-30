import { FC } from 'react'
import { User } from "../../utils/types"


type Props = {
    user: User;
}


const AvatarContainer: FC<Props> = ({ user }) => {
    return (
        <div>Avatar Component</div>
    )
}

export default AvatarContainer