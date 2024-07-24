import { Layout } from "@/components";
import { StoreProvider } from "@/context/Store";
import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
        const router = useRouter();

        const DefaultSeoConfig = {
                defaultTitle: "Go",
                titleTemplate: "%s | Go",
                description: "Welcome to Go",
                keywords: "Project, work, go , tech , frontend",
                openGraph: {
                        type: 'website',
                        locale: 'en_US',
                        url: 'https://go.com',
                        siteName: "Go",
                        title: "Go",
                        description: "Welcome to Go",
                        images: [
                                {
                                        url: 'https://dhouseofglam.store/siteimg.webp', // Default image URL
                                        width: 1280,
                                        height: 640,
                                        alt: "Go",
                                },
                        ],
                },
                additionalLinkTags: [
                        {
                                rel: 'icon',
                                href: '/go-logo.png',
                        },
                        {
                                rel: 'manifest',
                                href: '/manifest.json'
                        },
                        {
                                rel: 'preconnect',
                                href: 'https://fonts.googleapis.com'
                        },
                ],
        };

        return (
                <StoreProvider>
                        <Layout>
                                <DefaultSeo {...DefaultSeoConfig} />
                                <Toaster />
                                <AnimatePresence exitBeforeEnter initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
                                        <Component {...pageProps} key={router.asPath} />
                                </AnimatePresence>
                        </Layout>
                </StoreProvider>

        );
}
