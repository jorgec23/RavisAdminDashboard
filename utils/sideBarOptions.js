import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './sideBarOptions.module.scss';


export const sideBarOptions = [
    {
        id: 0,
        icon: <HomeIcon className = {styles.sideBarIcon}/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <ReceiptLongIcon className = {styles.sideBarIcon}/>,
        text: "Orders",
        link: "/orders"
    },
    {
        id: 2,
        icon: <PermIdentityIcon className = {styles.sideBarIcon}/>,
        text: "Customers",
        link: "/customers"
    },
    {
        id: 3,
        icon: <SettingsIcon className = {styles.sideBarIcon}/>,
        text: "Settings",
        link: "/settings"
    }
]