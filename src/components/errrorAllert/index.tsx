import { FC } from "react";
import style from "./index.module.scss";

type Prop = {
    error: string;
}


const errorAllert: FC<Prop> = ({ error }) => {
    return (
        <div className={style.container} id="ErrorBox">
            <h3>ERROR</h3>
            <p className={style.description}>{error}</p>
        </div>
    )
}

export default errorAllert;