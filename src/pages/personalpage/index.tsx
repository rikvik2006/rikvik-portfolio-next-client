import { GetServerSidePropsContext, NextPage } from "next";
import { getUser } from "../../utils/helpers/getUser";
import { User } from "../../utils/types";
import AvatarContainer from "./AvatarContainer";
import FristRowContainer from "./FristRowContainer";
import style from "./index.module.scss";
import { useEffect, useInsertionEffect, useState } from "react";
import axios from "axios";
import { APIBaseUrl } from "../../utils/constants";

type Prop = {
    user: User
}

const PersonalPage: NextPage<Prop> = ({ user }) => {
    const [userData, setUserData] = useState<User>(user);
    const [isPersonalInfoChanged, setIsPersonalInfoChanged] = useState<boolean>(false);

    useEffect(() => {
        console.log("📦 Personal info changed state value", isPersonalInfoChanged)
        const fetchUserData = async () => {
            const { data: responseUserData } = await axios.get<User>(`${APIBaseUrl}/api/user`, {
                withCredentials: true,
            })

            setUserData(responseUserData);
        }

        fetchUserData();
    }, [isPersonalInfoChanged])

    return (
        <div className={style.container}>
            <AvatarContainer user={userData} />
            <FristRowContainer personalInfoState={{ isPersonalInfoChanged, setIsPersonalInfoChanged }} />
        </div >

    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return getUser(context);
}

export default PersonalPage
