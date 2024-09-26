import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss";

type Props = {};

const Logo: FC<Props> = () => {
    return (
        <div className={style.logoContainer}>
            <Link href="/">
                <a>
                    <Image
                        className={style.logo}
                        src="/LogoHover.svg"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </a>
            </Link>
        </div>
    );
};

export default Logo;
