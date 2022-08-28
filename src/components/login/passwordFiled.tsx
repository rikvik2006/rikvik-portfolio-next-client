import { SingletonRouter } from 'next/router';
import { FC, useState } from 'react'
import style from "./index.module.scss";

type Props = {
    isRegister: boolean;
}


const PasswordFiled: FC<Props> = ({ isRegister }) => {
    const [password, setPassword]: [any, any] = useState('');
    const [color, setColor]: [any, any] = useState(null);
    const [error, setError]: [any, any] = useState(null);

    const RegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    function isVaildPassword(email: string) {
        return RegEx.test(email);
    }

    let handleChange

    if (isRegister) {

        handleChange = (event: any) => {
            if (!isVaildPassword(event.target.value)) {
                setColor(null);
                setError("The password must consist of between 6 and 24 characters, and must contain at least one number.");
            } else {
                setColor("setColor");
                setError(null);
            }

            setPassword(event.target.value);
        };
    }

    return (
        <div className={style.container}>
            <label htmlFor="password">Password</label>
            <input className={color} type="password" name="password" id="password" value={isRegister ? password : null} onChange={handleChange} required />
            {isRegister ? error && <div className={style.error}>{error}</div> : null}
        </div>
    )
}

export default PasswordFiled