import { FC, HTMLAttributes, ReactNode } from "react"
import style from "./button.module.scss"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    // Custom atributes
    buttonType?: "DEFAULT" | "SUCCESS" | "DANGER" | "WARNING";
    children: string | ReactNode;
}

const Button: FC<ButtonProps> = ({ children, buttonType = "DEFAULT", ...props }) => {


    return (
        <button className={`${style.container} ${style[buttonType.toLowerCase()]}`} {...props}>{children}</button>
    )
}

export default Button;