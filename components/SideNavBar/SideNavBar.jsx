import styles from "./SideNavBar.module.scss";
import { sideBarOptions } from "../../utils/sideBarOptions";
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ravis_logo from '../../public/ravis_logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import styledEngine from "@mui/styled-engine";
  

export default function SideNavBar() {
    const [open, setopen] = useState(true);
    const toggleOpen = () => {
        console.log("open?" + open)
        setopen(!open)
    }

    return (
        <div className = {open?styles.sideNavSpacer:styles.sideNavSpacerClosed}>
            <div className = {styles.sideNavContainer}>
                <div className = {open?styles.sidenav:styles.sidenavClosed}>
                    
                    <div className = {open?styles.ravisLogo:styles.ravisLogoClosed}>
                        <Image alt="ravis_logo" src = {ravis_logo}/>
                    </div>
                    <div className = {styles.menuBtnSpacer}>
                        <div className = {open?styles.menuBtnHolder:styles.menuBtnHolderClosed}>
                            <button className = {open?styles.menuBtn:styles.menuBtnClosed} onClick={toggleOpen}>
                                {<DoubleArrow className={styles.iconStyle}/>}
                            </button>
                        </div>
                    </div>
                    {sideBarOptions.map(item => {
                        return <Link href ={item.link} ><div key = {item.id} className = {styles.sideitem}>
                                        {item.icon}
                                        <span className = {open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                                </div>
                                </Link>
                    })}
                    
                        
                    
                    <span className = {open?styles.logoutText:styles.logoutTextClosed}>Logout</span>
                    <div className={open?styles.logoutBtnContainer:styles.logoutBtnContainerClosed}>
                        <button className = {styles.logoutBtn}>
                            {<LogoutIcon className={styles.logoutBtnIcon}/>}
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
  