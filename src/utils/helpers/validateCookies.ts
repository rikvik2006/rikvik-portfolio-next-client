import { GetServerSidePropsContext } from "next";

export const validateCookies = (ctx: GetServerSidePropsContext) => {
    const sessionID = ctx.req.cookies["connect.sid"]
    console.log("---SessionID---")
    console.log(sessionID);

    return sessionID ? {
        Cookie: `connect.sid=${sessionID}`
    } : false;
}

export const validateCookiesContinueRegister = (cxt: GetServerSidePropsContext) => {
    const userID = cxt.req.cookies["id"]

    return userID ? {
        Cookie: `id=${userID}`
    } : false;
}