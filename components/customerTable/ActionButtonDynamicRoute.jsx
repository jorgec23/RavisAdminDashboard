import styles from './UserTableActionButton.module.scss';
import Link from 'next/link';


export default function ActionButtonDynamicRoute({page,title, id}){

    
    return (
        <Link href ={`/${page}/${id}`}><div className={styles.buttonContainer}>
                            <button className={styles.buttonStyles}><strong>{title}</strong></button>
                        </div>
        </Link>
    )
}