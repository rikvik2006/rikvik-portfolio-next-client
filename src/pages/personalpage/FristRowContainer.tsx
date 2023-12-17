import { FC } from "react";
import style from "./index.module.scss";
import Input from "../../components/formComponents/input";
import Button from "../../components/formComponents/button";

type Prop = {

}

const FristRowContainer: FC<Prop> = () => {
    return (
        <div className={style.fristRowContainer}>
            <div className={style.inputsContainer}>
                <Input label="Name" regExp={/[a-zA-Z]{2,32}/} trim />
                <Input label="Surname" regExp={/[a-zA-Z]{2,32}/} trim />
                <Input label="Username" regExp={/[a-zA-Z0-9-_]{2,32}/} trim />
                <Button buttonType="SUCCESS">Save</Button>
            </div>
        </div>
    )
}

export default FristRowContainer;