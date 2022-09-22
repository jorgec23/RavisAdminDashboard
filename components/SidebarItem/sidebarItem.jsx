import styles from "./sidebarItem.module.scss";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SideBarSubItem from "./sideBarSubItem";
import Link from 'next/link';
import { useState } from 'react';
import {useTheme} from '../../utils/ThemeContext';


export default function SideItem ({item}){
    const {sideBarOpen, setSideBarOpen} = useTheme();
    // const toggleTheme = () => {
    //     setSideBarOpen(!sideBarOpen);
    // }

    const [open, setopen] = useState(true);
    const toggleOpen = () => {
        // console.log("open?" + open)
        setopen(!open)
    }

    if (item.submenu) {
        return (
            <div className = {styles.sideItemContainer}>
                <Link href = "/"><div key ={item.id} className = {styles.sideitem}>
                                    <div className = {styles.sideitemIconTextContainer}>
                                        {item.icon}
                                        <span className = {sideBarOpen?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                                    </div>
                                    {/* {item.submenu && <NavigateNextIcon />} */}
                                    <NavigateNextIcon/>
                                </div>
                </Link>
                <div className={styles.sideItemSubMenuContainer}>
                    {/* {item.submenu.map((subitem) => <SideBarSubItem key={subitem.id} subitem={subitem}/>) } */}
                </div>
            </div>
        )

    }
    else {
        return (
            <div className = {styles.sideItemContainer}>
                <Link href = "/orders"><div key ={item.id} className = {styles.sideitem}>
                        <div className = {styles.sideitemIconTextContainer}>
                            {item.icon}
                            <span className = {sideBarOpen?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                        </div>
                        {item.submenu && <NavigateNextIcon className = {styles.toggleBtn} />}
                    </div>
                </Link>
            </div>
        )
    }
           
}