import { FC } from 'react';
import Image from 'next/image';
import { Product } from "../../utils/types";
import style from "./index.module.scss";

type Props = {
    product: Product
};


const ProductComponent: FC<Props> = ({ product }) => {
    return (
        <div className={style.container}>
            <Image
                className={style.icon}
                src={product.icon}
                alt={`${product.icon}`}
                height={50}
                width={50}
            />
            <h3>{product.name}</h3>
            <hr />
            <p>{product.description}</p>
            <span className={["style.tags", "style.TextStart"].join(" ")}>{product.tags.join(" ")}</span>
            <span className={["style.price", "style.TextStart"].join(" ")}>{product.price}</span>
            <span className={["style.remaning", "style.TextStart"].join(" ")}>{product.remaning}</span>
            <input type="button" value="Buy" />
        </div>
    )
}

export default ProductComponent