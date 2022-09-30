// components/Layout.js
import SideNavBar from "./SideNavBar/SideNavBar.jsx";
import Head from "next/head";
import styles from  "./Layout.module.scss";
import MainNavBar from "./mainNavBar/MainNavBar.jsx";
import {useTheme} from '../utils/ThemeContext';



export default function Layout({children}) {
    const{mainNavBarTitle, setMainNavBarTitle} = useTheme();

    return (
        <div className={styles.Layout}>
            <Head>
                <title>Ravis Admin Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div className={styles.sideNavHolder}>
                <SideNavBar />
            </div>
            <main className={styles.mainHolder}>
                <div className={styles.mainNavBar}>
                    <MainNavBar mainNavBarTitle={mainNavBarTitle}></MainNavBar>
                </div>
                <div className={styles.Content}>
                    {children}
                </div>
            </main>
        </div>
    )
};