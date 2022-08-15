import { ReactElement } from "react";
import style from "./layout.module.scss";
import Navbar from "../misc/Navbar";

function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <div className={style.layoutStyle}>
                <Navbar />
                <main>{children}</main>
                <footer>Footer</footer>
            </div>
        </>
    )
}

export default Layout