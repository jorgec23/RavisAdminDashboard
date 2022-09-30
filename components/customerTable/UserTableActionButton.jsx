import styles from './UserTableActionButton.module.scss';
import Link from 'next/link';


export default function ActionButton({title, id}){

    
    return (
        <Link href ={`/users/${id}`}><div className={styles.buttonContainer}>
                            <button className={styles.buttonStyles}><strong>{title}</strong></button>
                        </div>
        </Link>
    )
}