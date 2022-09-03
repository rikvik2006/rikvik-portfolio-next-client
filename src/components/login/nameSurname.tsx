import { FC, useState, useEffect } from 'react'
import style from "./nameSurname.module.scss";

const NameSurname: FC = () => {
    const [nameValue, setNameValue] = useState<string>("");
    const [surNameValue, setSurNameValue] = useState<string>("");
    const [colorName, setColorName] = useState<string | undefined>(undefined)
    const [colorSurname, setColorSurname] = useState<string | undefined>(undefined)


    useEffect(() => {
        const RegEx = /^[a-zA-Z]{2,}$/g

        const isValid = (field: string) => {
            return RegEx.test(field);
        }

        if (isValid(nameValue)) setColorName("setColor")
        else setColorName(undefined);
    }, [nameValue])


    useEffect(() => {
        const RegEx = /^[a-zA-Z]{2,}$/g

        const isValid = (field: string) => {
            return RegEx.test(field);
        }

        if (isValid(surNameValue)) setColorSurname("setColor");
        else setColorSurname(undefined);
    }, [surNameValue])

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value)
    }

    const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSurNameValue(event.target.value)
    }

    return (
        <span className={style.container}>
            <span className={style.inputContainer}>
                <label htmlFor="Name">Name</label>
                <input className={colorName} type="text" name="name" id="name" onChange={handleChangeName} />
            </span>
            <span className={style.inputContainer}>
                <label htmlFor="surname">Surname</label>
                <input className={colorSurname} type="text" name="surname" id="surname" onChange={handleChangeSurname} />
            </span>
        </span >
    )
}

export default NameSurname