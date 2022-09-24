import styles from './MainNavBar.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import profilePicture from '../../public/hyun_bin.webp'
import Image from 'next/image';


export default function MainNavBar({mainNavBarTitle}) {

    return (
        <div className={styles.mainNavBarContainer}>
            <div className={styles.welcome}>Welcome, Juan C.</div>
            <div className={styles.mainNavBarTitle}>{mainNavBarTitle}</div>
            <div className={styles.notificationIconContainer}>
                <div className={styles.orderMessageContainer}>
                    <ShoppingCartIcon className={styles.notificationIconStyle}></ShoppingCartIcon>
                    <div className={styles.newOrderCounter}>{"4"}</div>
                </div>
                
                <div className={styles.orderMessageContainer}>
                    <QuestionAnswerIcon className={styles.notificationIconStyle}></QuestionAnswerIcon>
                    <div className={styles.newMessageCounter}>{"1"}</div>
                </div>
                <div className={styles.orderMessageContainer}>
                    <SettingsIcon className={styles.notificationIconStyle}></SettingsIcon>
                </div>
                <div className={styles.profilePictureContainer}>
                    <Image alt="ravis_logo" src = {profilePicture}/>
                </div>
            </div>
        </div>
    )
}