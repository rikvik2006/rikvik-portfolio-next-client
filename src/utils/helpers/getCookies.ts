import { AxiosResponse } from "axios";

export const getCookie = async (res: AxiosResponse) => {
    const sessionID = res.headers["connect.sid"]
    console.log(sessionID);

    return sessionID ? {
        Cookie: `connect.sid=${sessionID}`
    } : false;
}