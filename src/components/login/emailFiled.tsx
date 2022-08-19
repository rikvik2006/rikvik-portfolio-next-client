import { FC, useState } from 'react';
import style from "./index.module.scss";


const EmailField: FC = () => {

    const [email, setEmail] = useState('');
    const [color, setColor]: [any, any] = useState(null);

    const RegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    function isValidEmail(email: string) {
        return RegEx.test(email);
    }

    const handleChange = (event: any) => {
        if (!isValidEmail(event.target.value)) {
            setColor(null);
        } else {
            setColor("setColor");
        }

        setEmail(event.target.value);
    };

    return (
        <div className={style.container}>
            <label htmlFor="email">Email</label>
            <input className={color} type="email" name="email" value={email} id="email" placeholder='jon.doe@gmail.com' onChange={handleChange} required />
        </div>
    )
}

export default EmailField