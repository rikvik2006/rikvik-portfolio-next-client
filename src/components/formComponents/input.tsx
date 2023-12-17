import { FC, HTMLAttributes, useEffect, useState } from "react";
import style from "./index.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    // Custom atributes
    label: string
    type?: "text" | "password";
    regExp?: RegExp;
    trim?: boolean;
}

const Input: FC<InputProps> = ({ label, type = "text", regExp, trim, ...props }) => {
    const [value, setValue] = useState<string>("")
    const [color, setColor] = useState<string | null>(null);

    useEffect(() => {
        if (!regExp) return;

        const isValidUsername = (username: string) => {
            return regExp.test(username);
        }

        if (isValidUsername(value.trim())) {
            return setColor("setColor");
        } else {
            return setColor(null);
        }

    }, [value, regExp])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    const labelLowerCase = label.toLowerCase();
    return (
        <div className={style.container}>
            <label htmlFor={labelLowerCase}>{label}</label>
            <input {...props} className={color!} type={type} name={labelLowerCase} id={labelLowerCase} value={trim ? value.trim() : value} onChange={handleChange} />
        </div>
    )
}

export default Input