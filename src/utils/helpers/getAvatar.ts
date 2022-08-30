import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { validateCookies } from "./validateCookies";

export type Avatar = {
    image: string
}

export const getAvatar = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    console.log("---Headers---");
    console.log(headers);
    if (!headers) return { redirect: { destination: "/" } };

    try {
        const { data: avatar } = await axios.get<Avatar>("http://localhost:3001/api/cdn", { headers })
        return { props: { avatar } };
    } catch (err) {
        console.log(err);
        return { redirect: { destination: "/" } }
    }

}