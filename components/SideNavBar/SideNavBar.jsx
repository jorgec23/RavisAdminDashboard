import styles from "./SideNavBar.module.scss";
import { sideBarOptions } from "../../utils/sideBarOptions";
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import Image from 'next/image';
import ravis_logo from '../../public/ravis_logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import SideItem from "../SidebarItem/sidebarItem";
import {useTheme} from '../../utils/ThemeContext';
import {signOut} from 'next-auth/react';
   

export default function SideNavBar() {
    const {sideBarOpen, setSideBarOpen} = useTheme();
    const toggleTheme = () => {
        setSideBarOpen(!sideBarOpen);
    }


    return (
        <div className = {sideBarOpen?styles.sideNavSpacer:styles.sideNavSpacerClosed}>
            <div className = {styles.sideNavContainer}>
                <div className = {sideBarOpen?styles.sidenav:styles.sidenavClosed}>
                    
                    <div className = {sideBarOpen?styles.ravisLogo:styles.ravisLogoClosed}>
                        <Image alt="ravis_logo" src = {ravis_logo}/>
                    </div>
                    <div className = {styles.menuBtnSpacer}>
                        <div className = {sideBarOpen?styles.menuBtnHolder:styles.menuBtnHolderClosed}>
                            <button className = {sideBarOpen?styles.menuBtn:styles.menuBtnClosed} onClick={toggleTheme}>
                                {<DoubleArrow className={styles.iconStyle}/>}
                            </button>
                        </div>
                    </div>
                    <div className={styles.sideNavContainerOverflow}>
                        <div className={styles.sideNavItemsContainer}>
                            {sideBarOptions.map((item) => <SideItem key={item.id} item={item} />)}  
                        </div>
                        <div className={styles.sideNavLogoutContainer}>
                            <div className={sideBarOpen?styles.logoutBtnContainer:styles.logoutBtnContainerClosed}>
                                <button className = {styles.logoutBtn} onClick={() => signOut()}>
                                    <span className = {sideBarOpen?styles.logoutText:styles.logoutTextClosed}>Logout</span>
                                    {<LogoutIcon className={sideBarOpen?styles.logoutBtnIcon:styles.logoutBtnIconClosed}/>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  