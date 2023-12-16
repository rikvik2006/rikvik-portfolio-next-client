import { FC, useState } from "react";
import { User } from "../../../../utils/types";
import Links from "./Links";
import LoginTools from "./LoginTools";

type Props = {
}


const LinkContainer: FC<Props> = () => {
    const [toggleMobileNavbar, setToggleMobileNavbar] = useState<() => void>();

    console.log("⚠️", toggleMobileNavbar)

    return (
        <>
            <Links setToggleMobileNavbar={setToggleMobileNavbar} />
            <LoginTools toggleMobileNavbar={toggleMobileNavbar} />
        </>
    )
}

export default LinkContainer