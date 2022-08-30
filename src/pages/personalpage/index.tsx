import { GetServerSidePropsContext, NextPage } from "next";
import { getAvatar } from "../../utils/helpers/getAvatar";
import { validateCookies } from "../../utils/helpers/validateCookies";
import { Avatar } from "../../utils/helpers/getAvatar";
import style from "./index.module.scss";
import Image from "next/image";

type Prop = {
    avatar: Avatar;
}

const PersonalPage: NextPage<Prop> = ({ avatar }) => {

    return (
        <div className={style.container}>
            <div className={style.avatarContainer}>
                <div className={style.subAvatarContainer}>

                    <Image className={style.avatar}
                        src={avatar.image}
                        alt={avatar.image}
                        height={290}
                        width={290}
                    />
                    <div className={style.informationContainer}>
                        <h3>Riccardo Bussano</h3>
                        <p>rikvik2006</p>
                    </div>
                </div>
            </div>
        </div >

    )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

    return getAvatar(context)
}

export default PersonalPage