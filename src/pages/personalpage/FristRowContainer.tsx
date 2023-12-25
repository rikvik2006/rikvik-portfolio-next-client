import { FC } from "react";
import style from "./index.module.scss";
import Input from "../../components/formComponents/input";
import Button from "../../components/formComponents/button";
import { changePersonalInformation } from "../../utils/helpers/personalPage/changePersonalInformation";

type Prop = {

}

const FristRowContainer: FC<Prop> = () => {
    return (
        <div className={style.fristRowContainer}>
            <form className={style.inputsContainer} onSubmit={changePersonalInformation}>
                <Input label="Name" regExp={/[a-zA-Z]{2,32}/} trim />
                <Input label="Surname" regExp={/[a-zA-Z]{2,32}/} trim />
                <Input label="Username" regExp={/[a-zA-Z0-9-_]{2,32}/} trim />
                <Button buttonType="SUCCESS">Save</Button>
            </form>
        </div>
    )
}

export default FristRowContainer;