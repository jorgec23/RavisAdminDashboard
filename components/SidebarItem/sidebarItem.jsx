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

    const [open, setopen] = useState(false);
    const toggleOpen = () => {
        // console.log("open?" + open)
        setopen(!open)
    }

    if (item.submenu) {
        return (
            <div className = {styles.sideItemContainer}>
                <div key ={item.id} className = {styles.sideitem} onClick={toggleOpen}>
                    <div className = {styles.sideitemIconTextContainer}>
                        {item.icon}
                        <span className = {sideBarOpen?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                    </div>
                    <div className = {sideBarOpen?styles.dropdownIconSidebarOpen:styles.dropdownIconSidebarClosed}>
                        <NavigateNextIcon className = {open?styles.dropdownIcon:styles.dropdownIconClosed}/>
                    </div>
                </div>
                
                <div className={open?styles.sideItemSubMenuContainer:styles.sideItemSubMenuContainerClosed}>
                    {item.submenu.map((subitem, mainIcon) => <SideBarSubItem key={subitem.id} subitem={subitem} mainIcon={item.miniIcon}/>) }
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
                        {/* {item.submenu && <NavigateNextIcon className = {styles.toggleBtn} />} */}
                    </div>
                </Link>
            </div>
        )
    }
           
}