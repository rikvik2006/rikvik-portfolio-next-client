import React, { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import style from "./index.module.scss";

const ConfirmPasswordField: FC = () => {
    const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
    const [color, setColor] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);


    const ref: any = useRef();

    useEffect(() => {
        const password: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
        const passowrdValue = password.value;
        console.log("-------")
        console.log(passowrdValue)
        console.log(confirmPassword);

        if (passowrdValue == confirmPassword) {
            setColor("setColor")
            setError(null);
        } else {
            setColor(undefined);
            setError("Passwords don't match ")
        }
    }, [confirmPassword])

    const handleChange = (event: any) => {
        setConfirmPassword(event.target.value)
    }

    return (
        <div className={style.container}>
            <label htmlFor="confirmPassword">Password</label>
            <input className={color} type="text" name="password" id="confirmPassword" value={confirmPassword!} onChange={handleChange} required />
            {error && <div className={style.error}>{error}</div>}
        </div>
    )
}

export default ConfirmPasswordField