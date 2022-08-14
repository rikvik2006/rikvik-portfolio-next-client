import { ReactElement } from "react";
import style from "./layout.module.scss";

function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <div className={style.layoutStyle}>
                <nav>NavBar</nav>
                <main>{children}</main>
                <footer>Footer</footer>
            </div>
        </>
    )
}

export default Layout