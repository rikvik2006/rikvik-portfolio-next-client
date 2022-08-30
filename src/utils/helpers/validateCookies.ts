import { GetServerSidePropsContext } from "next";

export const validateCookies = async (ctx: GetServerSidePropsContext) => {
    const sessionID = ctx.req.cookies["connect.sid"]
    console.log(sessionID);

    return sessionID ? {
        Cookie: `connect.sid=${sessionID}`
    } : false;
}