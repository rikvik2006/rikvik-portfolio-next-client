import { FC, useState } from 'react'
import style from "./index.module.scss";

const PasswordFiled: FC = () => {
    const [password, setPassword] = useState('');
    const [color, setColor]: [any, any] = useState(null);

    const RegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    function isVaildPassword(email: string) {
        return RegEx.test(email);
    }

    const handleChange = (event: any) => {
        if (!isVaildPassword(event.target.value)) {
            setColor(null);
        } else {
            setColor("setColor");
        }

        setPassword(event.target.value);
    };

    return (
        <div className={style.container}>
            <label htmlFor="password">Password</label>
            <input className={color} type="password" name="password" id="password" value={password} onChange={handleChange} required />
        </div>
    )
}

export default PasswordFiled