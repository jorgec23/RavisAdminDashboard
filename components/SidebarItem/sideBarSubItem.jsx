import styles from "./sidebarItem.module.scss";
import Link from 'next/link';

export default function SideBarSubItem({subitem}) {
    // console.log(subitem);

    return (
        <Link href = "/"><div key={item.id} className = {styles.subsideitem}>
                {subitem.icon}
                <span className = {open?styles.sublinkText:styles.sublinkTextClosed}>{subitem.text}</span>
            </div>
        </Link>
    )
}