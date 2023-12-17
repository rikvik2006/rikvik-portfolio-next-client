import { FC, HTMLAttributes, useEffect, useState } from "react";
import style from "./input.module.scss";

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

        const isValidUsername = (value: string) => {
            return regExp.test(value);
        }

        if (isValidUsername(trim ? value.trim() : value)) {
            return setColor("setColor");
        } else {
            return setColor(null);
        }

    }, [value, regExp])

    useEffect(() => {
        console.log("✅", color);
    }, [color])

    useEffect(() => {
        console.log("🔗", value);
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("💱", event.currentTarget.value)
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