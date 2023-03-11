import { FC, useState, useEffect } from 'react'
import style from "./index.module.scss";

type Props = {}


const UsernameField: FC<Props> = () => {
    const [username, setUsername] = useState<string>("")
    const [color, setColor] = useState<string | null>(null);

    useEffect(() => {
        const regEx = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi

        const isValidUsername = (username: string) => {
            return regEx.test(username);
        }
        //console.log(isValidUsername(username));
        console.log("---UserName---")
        console.log(username.trim());

        if (isValidUsername(username.trim())) {
            return setColor("setColor");
        } else {
            return setColor(null);
        }

    }, [username])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    }

    return (
        <div className={style.container}>
            <label htmlFor="username">Username</label>
            <input className={color!} type="username" name="username" id="username" value={username.trim()} onChange={handleChange} />
        </div>
    )
}

export default UsernameField