import { GetServerSidePropsContext, NextPage } from "next";
import { getAvatar } from "../../utils/helpers/getAvatar";
import { validateCookies } from "../../utils/helpers/validateCookies";
import { Avatar } from "../../utils/helpers/getAvatar";

type Prop = {
    avatar: Avatar;
}

const PersonalPage: NextPage<Prop> = ({ avatar }) => {

    return (
        <>
            <div>Persona page</div>
            <div>{avatar.image}</div>
        </>
    )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

    return getAvatar(context)
}

export default PersonalPage