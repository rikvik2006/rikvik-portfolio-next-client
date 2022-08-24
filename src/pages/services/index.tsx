import { GetServerSidePropsContext, NextPage } from 'next'
import ProductComponent from '../../components/servicesProducts';
import { Product } from '../../utils/types';
import style from "./index.module.scss";
import axios from "axios";

type PropsWithProducts = {
    products: Product[]
}


const ServicesPage: NextPage<PropsWithProducts> = ({ products }) => {
    return (
        <>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />


            <div className={style.serviceContainer}>
                {products.map((product) => (
                    <ProductComponent key={product.id} product={product} />
                ))}
            </div>

            <hr className={style.hr} />
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

    const { data: products } = await axios.get<Product[]>("http://localhost:3001/api/services/")

    return {
        props: { products }
    }
}

export default ServicesPage