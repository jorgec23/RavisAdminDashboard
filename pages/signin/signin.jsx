import styles from './signin.module.scss';


export default function SignIn(){
    return (
        <div className = {styles.mainBackground}>
            SIGN IN HERE ...
        </div>
    )
}

SignIn.getLayout = (page) => page;
