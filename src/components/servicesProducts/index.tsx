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
            <h3>{product.name}</h3>
            <Image
                src={product.icon}
                alt={`${product.icon}`}
                height={50}
                width={50}
            />
            <p>{product.description}</p>
            <span className={style.tags}>{product.tags}</span>
            <span className={style.price}>{product.price}</span>
            <span className={style.remaning}>{product.remaning}</span>
        </div>
    )
}

export default ProductComponent