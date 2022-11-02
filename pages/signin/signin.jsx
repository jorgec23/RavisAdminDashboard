import styles from './signin.module.scss';
import {signIn, getCsrfToken, getProviders} from 'next-auth/react';
import Image from 'next/image';
import ravisLogo from '../../public/ravis_logo.png';
import { CSSTransition } from 'react-transition-group';
import titleTransitionsRight from './titleTransitionsRight.module.scss';
import titleTransitionsLeft from './titleTransitionsLeft.module.scss';
import {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
            providers: await getProviders(),
        },
    };
}

export default function SignIn({csrfToken, providers}){

    const [signInFocus, setSignInFocus] = useState(false);
    // const [error, setError] = useState(null);

    useEffect(() => {
        setSignInFocus(true);
    });


    // react hook form and yup initialization
    const schema = yup.object().shape({
        username: yup.string().required('An email is required.'),
        password: yup.string().required('A password is required to log in.'),
    });

    const {register, handleSubmit, watch, formState:{errors, isSubmitting}} = useForm({
        resolver: yupResolver(schema)
    });

    // const watchInputs = watch(["username", "password"]);
    // console.log(watchInputs);


    const onSubmit =  (data, e) => {
        e.target.submit();
    };

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
                    <CSSTransition 
                        in = {signInFocus}
                        classNames = {titleTransitionsLeft}
                        timeout={4000}
                        appear = {true}
                        // unmountOnExit={true}
                    >
                        <div className ={styles.rectangleLeft}>Management</div>
                    </CSSTransition>
                </div>
            </div>
            <div className= {styles.rightBackground}>
                <div className={styles.rectangleContainerRight}>
                    <CSSTransition 
                        in = {signInFocus}
                        classNames = {titleTransitionsRight}
                        timeout={4000}
                        appear = {true}
                        unmountOnExit = {true}
                    >
                        <div className ={styles.rectangleRight}>Management</div>
                    </CSSTransition>
                </div>
                <div className={styles.fixedTitleContainer}>
                    <div className = {styles.fixedTitle}>
                        Dashboard
                    </div>
                </div>
                <form action={providers['credentials'].callbackUrl} method="post" onSubmit={handleSubmit(onSubmit)} className={styles.signinFormContainer}>
                    <div className={styles.signinFormField}>
                        <label className={styles.signinFormFieldLabel}>
                            Username:
                        </label>
                        <input name = 'username' {...register('username')} autoComplete='off' placeholder='' 
                            className={styles.inputStyle}></input>
                    </div>
                    <div className={styles.signinFormField}>
                        <label className={styles.signinFormFieldLabel}>
                            Password:
                        </label>
                        <input name = 'password' {...register('password')} autoComplete='off' placeholder='' className={styles.inputStyle}></input>
                    </div>
                    <div className={styles.signinButtonContainer}>
                        <button disabled = {isSubmitting} className={styles.signInButton} type='submit'>Sign In</button>
                    </div>
                    <input name="csrfToken" type="hidden" value={csrfToken} />
                </form>
                
            </div>

        </div>
    )
}

SignIn.getLayout = (page) => page;
