// components/Layout.js
import SideNavBar from "./SideNavBar/SideNavBar.jsx";
import Head from "next/head";
import styles from  "./Layout.module.scss";




export default function Layout({children}) {
    return (
        <div className={styles.Layout}>
            <Head>
                <title>Ravis Admin Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <SideNavBar />
            <main className={styles.mainHolder}>
                <div className={styles.Content}>
                    {children}
                </div>
            </main>
        </div>
    )
};