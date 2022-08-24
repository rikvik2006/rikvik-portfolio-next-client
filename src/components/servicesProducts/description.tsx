import { FC } from 'react'
import { Product } from '../../utils/types'
import style from "./index.module.scss";

type Props = {
    product: Product
}


const DescriptionComponent: FC<Props> = ({ product }) => {

    const splitedDescription: string[] = product.description.split(":")

    return (
        <div className={style.containerDescription}>
            <ul>
                {splitedDescription.map((li) => (
                    <li key={li.slice(5)}>{li}</li>
                ))}
            </ul>
        </div>
    )
}

export default DescriptionComponent