import styles from "./sidebarItem.module.scss";
import Link from 'next/link';
import { useTheme } from "../../utils/ThemeContext";

export default function SideBarSubItem({subitem, mainIcon}) {
    const {sideBarOpen, setSideBarOpen} = useTheme();
    // const toggleTheme = () => {
    //     setSideBarOpen(!sideBarOpen);
    // }                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    return (
        <Link href = "/"><div key={subitem.id} className = {styles.subsideitem}>
                <div className={styles.subitemIcon}>
                    {subitem.icon}
                    <span className={sideBarOpen?styles.subitemMiniIcon:styles.subitemMiniIconClosed}>
                        {mainIcon}
                    </span>
                </div>
                <span className={sideBarOpen?styles.sublinkText:styles.sublinkTextClosed}>{subitem.text}</span>
            </div>
        </Link>
    )
}