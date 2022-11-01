import styles from './signin.module.scss';
import {signIn} from 'next-auth/react';
import Image from 'next/image';
import ravisLogo from '../../public/ravis_logo.png';


export default function SignIn(){
    return (
        <div className = {styles.mainBackground}>
            <div className= {styles.leftBackground}>
                <Image 
                    alt="ravis_logo"
                    src={ravisLogo}
                    width={600}
                    height={192}
                />
                <div className={styles.rectangleContainerLeft}>
                    <div className ={styles.rectangleLeft}>Management</div>
                </div>
            </div>
            <div className= {styles.rightBackground}>
                <div className={styles.rectangleContainerRight}>
                    <div className ={styles.rectangleRight}>Management</div>
                </div>
                <div className={styles.fixedTitleContainer}>
                    <div className = {styles.fixedTitle}>
                        Dashboard
                    </div>
                </div>
                <div className={styles.signinFormContainer}>
                    <div className={styles.signinFormField}>
                        <label className={styles.signinFormFieldLabel}>
                            Username:
                        </label>
                        <input type='text' autoComplete='off' placeholder='' className={styles.inputStyle}></input>

                    </div>
                    <div className={styles.signinFormField}>
                        <label className={styles.signinFormFieldLabel}>
                            Password:
                        </label>
                        <input type='text' autoComplete='off' placeholder='' className={styles.inputStyle}></input>
                    </div>
                    <div className={styles.signinButtonContainer}>
                        <button className={styles.signInButton} onClick={()=>signIn()}>Sign In</button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

SignIn.getLayout = (page) => page;
