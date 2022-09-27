import styles from './MainNavBar.module.scss';
import popupTransitions from './PopupTransitions.module.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import profilePicture from '../../public/hyun_bin.webp'
import Image from 'next/image';
import {useState, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import PopupMessage from './PopupMessage';
import Link from 'next/link';


export default function MainNavBar({mainNavBarTitle}) {
    const [orderPopOpen, setOrderPopOpen] = useState(false); 
    const [messagePopOpen, setMessagePopOpen] = useState(false);
    // const nodeRefOrders = useRef(null);
    const nodeRefMessages = useRef(null);

    const maxMessages = 5;
    return (
        <div className={styles.mainNavBarContainer}>
            <div className={styles.welcome}>Welcome, Juan C.</div>
            <div className={styles.mainNavBarTitle}>{mainNavBarTitle}</div>
            <div className={styles.notificationIconContainer}>
                <div className={styles.orderMessageContainer} onClick={()=>setOrderPopOpen(!orderPopOpen)}>
                    <ShoppingCartIcon className={styles.notificationIconStyle}></ShoppingCartIcon>
                    <div className={styles.newOrderCounter}>{"4"}</div>
                    <CSSTransition 
                        in={orderPopOpen} 
                        timeout={500} 
                        classNames={popupTransitions}
                        unmountOnExit
                        onEnter={()=>messagePopOpen&&setMessagePopOpen(!orderPopOpen)}>
                        <div className={styles.recentOrdersMessagesContainerBase}>
                            <div className={styles.recentOrdersMessagesContainerTitle}>
                                Recent Orders
                            </div>
                            <PopupMessage orderType="Online" amount="5433.45" name="Anand S." message = "I am having trouble sending all of my orders, please help.  I have submitted 5 orders already with no confirmation for any of them!?!??!" date="09/16/22 3:44 PM"/>
                            <PopupMessage orderType="Mobile" amount="5433.45" name="Savithru H." message="When will you restock the Malboro Red 60s?" date="09/16/22 02:05 PM"/>
                            <PopupMessage orderType="In-store" amount="5433.45" name="Joel M." message="I placed an order a week aog, it has not arrived ..." date="09/15/22 08:00 AM"/>
                            <PopupMessage orderType="Mobile" amount="5433.45" name="Carter L." message="Cancel Order" date="09/15/22 08:00 AM"/>
                            <PopupMessage orderType="Mobile" amount="5433.45" name="Jenna S." message="Returning Items" date="09/12/22 05:00 PM"/>
                            <Link href="/"><div className={styles.allNotificationsButtonContainer}>
                                    <div className={styles.allNotificationsText}>
                                        See all orders ...
                                    </div>
                                </div>
                                
                            </Link> 
                        </div>
                    </CSSTransition>
                </div>
                
                <div className={styles.orderMessageContainer} onClick={()=>setMessagePopOpen(!messagePopOpen)}>
                    <QuestionAnswerIcon className={styles.notificationIconStyle}></QuestionAnswerIcon>
                    <div className={styles.newMessageCounter}>{"1"}</div>
                    <CSSTransition 
                        nodeRef = {nodeRefMessages} 
                        in={messagePopOpen} 
                        timeout={500} 
                        classNames={popupTransitions} 
                        unmountOnExit
                        onEnter={()=>orderPopOpen&&setOrderPopOpen(!orderPopOpen)}>
                        <div ref={nodeRefMessages} className={styles.recentOrdersMessagesContainerBase}>
                            <div className={styles.recentOrdersMessagesContainerTitle}>
                                Recent Messages
                            </div>
                            <PopupMessage name="Anand S." message = "I am having trouble sending all of my orders, please help.  I have submitted 5 orders already with no confirmation for any of them!?!??!" date="09/16/22 3:44 PM"/>
                            <PopupMessage name="Savithru H." message="When will you restock the Malboro Red 60s?" date="09/16/22 02:05 PM"/>
                            <PopupMessage name="Joel M." message="I placed an order a week aog, it has not arrived ..." date="09/15/22 08:00 AM"/>
                            <PopupMessage name="Carter L." message="Cancel Order" date="09/15/22 08:00 AM"/>
                            <PopupMessage name="Jenna S." message="Returning Items" date="09/12/22 05:00 PM"/>
                            <Link href="/"><div className={styles.allNotificationsButtonContainer}>
                                    <div className={styles.allNotificationsText}>
                                        See all messages ...
                                    </div>
                                </div>
                            </Link> 
                        </div>
                    </CSSTransition> 
                    
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