import { GetServerSidePropsContext, NextPage } from "next";
import { getUser } from "../../utils/helpers/getUser";
import { User } from "../../utils/types";
import AvatarContainer from "./AvatarContainer";
import style from "./index.module.scss";

type Prop = {
    user: User
}

const PersonalPage: NextPage<Prop> = ({ user }) => {

    return (
        <div className={style.container}>
            <AvatarContainer user={user} />
        </div >

    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return getUser(context);
}

export default PersonalPage
