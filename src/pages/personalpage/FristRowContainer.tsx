import { FC } from "react";
import style from "./index.module.scss";
import Input from "../../components/formComponents/input";

type Prop = {

}

const FristRowContainer: FC<Prop> = () => {
    return (
        <div className={style.fristRowContainer}>
            <div className={style.inputsContainer}>
                <Input label="Name" />
                <Input label="Surname" />
                <Input label="Username" />
            </div>
        </div>
    )
}

export default FristRowContainer;