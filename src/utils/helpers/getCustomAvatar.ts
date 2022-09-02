import { GetServerSidePropsContext } from "next";
import { getUser } from "./getUser"
import { User } from "../types";

export const getCustomAvatar = async (context: GetServerSidePropsContext) => {
    const user: any = await getUser(context);

    console.log(user.props.avatar);
    return user.props.avatar;
}