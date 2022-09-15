import { FC } from "react";
import { User } from "../../../../utils/types";
import Links from "./Links";
import LoginTools from "./LoginTools";

type Props = {
}


const LinkContainer: FC<Props> = () => {
    return (
        <>
            <Links />
            <LoginTools />
        </>
    )
}

export default LinkContainer