import { FC, RefObject, useState } from "react";
import { User } from "../../../../utils/types";
import Links from "./Links";
import LoginTools from "./LoginTools";

type Props = {
}


const LinkContainer: FC<Props> = () => {
    const [navbarRef, setNavbarRef] = useState<RefObject<HTMLDivElement>>();

    const getNavbarRef = (navbarRef: RefObject<HTMLDivElement>) => {
        setNavbarRef(navbarRef);
    }

    return (
        <>
            <Links getNavbarRef={getNavbarRef} />
            <LoginTools navbarRef={navbarRef} />
        </>
    )
}

export default LinkContainer