import "../utils/styles/globals.scss"
import type { AppProps } from 'next/app'
import { Layout } from "../components"
import { GetServerSidePropsContext, NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { getUserOrFalse } from "../utils/helpers/getUserOrFalse";
import { User } from "../utils/types";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type ApppropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
    user: User;
}

function MyApp({ Component, pageProps }: ApppropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => <Layout user={pageProps}>{page}</Layout>);
    console.log("---User From app---")
    console.log(pageProps);

    return (
        getLayout(<Component {...pageProps} />)
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    console.log("---Context---")
    console.log(context);
    return getUserOrFalse(context);
}

export default MyApp
