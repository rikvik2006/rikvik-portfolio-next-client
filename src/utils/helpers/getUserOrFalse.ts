import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { validateCookies } from "./validateCookies";
import { User } from "../types";
import { APIBaseUrl } from "../constants";

export const getUserOrFalse = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    console.log("---Headers---");
    console.log(headers);
    if (!headers) return { props: false };

    try {
        const { data: user } = await axios.get<User>(`${APIBaseUrl}/api/user`, { headers })
        return { props: { user } };
    } catch (err) {
        console.log(err);
        return { props: false }
    }
}