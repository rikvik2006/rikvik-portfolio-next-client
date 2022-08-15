import { NextComponentType } from 'next'
import Links from "./Links";
import LoginTools from "./LoginTools";

type Props = {}


const LinkContainer: NextComponentType<Props> = () => {
    return (
        <>
            <Links />
            <LoginTools />
        </>
    )
}

export default LinkContainer