import { FC } from "react";
import { User } from "../../../../utils/types";
import Links from "./Links";
import LoginTools from "./LoginTools";

type Props = {
    user: User
}


const LinkContainer: FC<Props> = ({ user }) => {
    return (
        <>
            <Links />
            <LoginTools user={user} />
        </>
    )
}

export default LinkContainer