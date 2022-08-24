import { FC } from 'react';
import Image from 'next/image';
import { Product } from "../../utils/types";
import style from "./index.module.scss";
import DescriptionComponent from './description';

type Props = {
    product: Product
};


const ProductComponent: FC<Props> = ({ product }) => {
    return (


        <div className={style.container}>
            <div className={style.containerIcon}>
                <Image
                    className={style.icon}
                    src={product.icon}
                    alt={`${product.icon}`}
                    height={100}
                    width={100}
                />
            </div>

            <div className={style.containerTitle}>
                <h3>{product.name}</h3>
            </div>

            <div className={style.containerPrice}>
                <span className={["style.price", "style.TextStart"].join(" ")}>{product.price}</span>
            </div>

            <div className={style.containerHr}>
                <hr className={style.hr} />
            </div>

            <DescriptionComponent product={product} />

            <div className={style.containerTags}>
                <span className={["style.tags", "style.TextStart"].join(" ")}>{product.tags.join(", ")}</span>
            </div>


            <div className={style.containerQty}>
                <span className={["style.remaning", "style.TextStart"].join(" ")}>{product.remaning}</span>
            </div>

            <div className={style.buttonContainer}>
                <input type="button" value="Buy" />
            </div>

        </div >
    )
}

export default ProductComponent