import "../utils/styles/globals.scss"
import type { AppProps } from 'next/app'
import { Layout } from "../components"
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type ApppropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: ApppropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

    return (
        getLayout(<Component {...pageProps} />)
    )
}

export default MyApp
