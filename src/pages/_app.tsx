import "../utils/styles/globals.scss"
import type { AppProps } from 'next/app'
import { Layout } from "../components"
import { GetServerSidePropsContext, NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import { getUserOrFalse } from "../utils/helpers/getUserOrFalse";
import { User } from "../utils/types";
import toast, { Toaster, useToasterStore } from "react-hot-toast"

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type ApppropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: ApppropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => <Layout >{page}</Layout>);

    const { toasts } = useToasterStore();

    useEffect(() => {
        toasts
            .filter((t) => t.visible)
            .filter((_, i) => i >= 5)
            .forEach((t) => toast.dismiss(t.id))
    }, [toasts])

    return (
        <>
            {getLayout(<Component {...pageProps} />)}
            <Toaster toastOptions={
                {
                    style: {
                        backgroundColor: "#2a2e35",
                        color: "#f8f8f8",
                        border: "3px solid #f8f8f830"
                    },
                }
            } />
        </>
    )
}

export default MyApp
