import { FC, useState, useEffect } from 'react'
import style from "./nameSurname.module.scss";

const NameSurname: FC = () => {
    const [lengthName, setLengthName] = useState<number>(0);
    const [lengthSurname, setLengthSurname] = useState<number>(0);
    const [colorName, setColorName] = useState<string | undefined>(undefined)
    const [colorSurname, setColorSurname] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (lengthName >= 2) setColorName("setColor")
        else setColorName(undefined);

        if (lengthSurname >= 2) setColorSurname("setColor");
        else setColorSurname(undefined);
    }, [lengthName, lengthSurname])

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLengthName(event.currentTarget.value.length)
    }

    const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLengthSurname(event.currentTarget.value.length)
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