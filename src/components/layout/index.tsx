import { ReactElement } from "react";
import style from "./layout.module.scss";
import Navbar from "../misc/Navbar";
import FooterComponet from "../misc/Footer";
import { getUserOrFalse } from "../../utils/helpers/getUserOrFalse";
import { User } from "../../utils/types";
import { GetServerSidePropsContext } from "next";

function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <div className={style.layoutStyle}>
                <Navbar />
                <main>{children}</main>
                <FooterComponet />
            </div>
        </>
    )
}

export default Layout