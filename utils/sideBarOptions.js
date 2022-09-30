import styles from './sideBarOptions.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SyncIcon from '@mui/icons-material/Sync';


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
        miniIcon: <ReceiptLongIcon className = {styles.sideBarMiniIcon}/>, 
        text: "Orders",
        // link: "/orders/",
        submenu: [
            {
                id: 11,
                icon: <SearchIcon className = {styles.sideBarSubMenuIcon}/>,
                text: "Search Orders",
                link: "/orders/search",
            },
            {
                id: 12,
                icon: <EditIcon className = {styles.sideBarSubMenuIcon}/>,
                text: "Update Order Details",
                link: "/orders/update",
            },
            {
                id: 13,
                icon: <HourglassTopIcon className = {styles.sideBarSubMenuIcon}/>,
                text: "Orders Placed",
                link: "/orders/placed",
            },
            {
                id: 14,
                icon: <DirectionsRunIcon className = {styles.sideBarSubMenuIcon}/>,
                text: "Orders Processing",
                link: "/orders/processing",
            },
        
        ]
    },
    {
        id: 2,
        icon: <PermIdentityIcon className = {styles.sideBarIcon}/>,
        miniIcon: <PermIdentityIcon className = {styles.sideBarMiniIcon}/>,
        text: "Users",
        // link: "/customers",
        submenu: [
            {
                id: 21,
                icon: <SearchIcon className = {styles.sideBarSubMenuIcon}/>,
                text: "Search/Edit Users",
                link: "/users/search",
            },
            // {
            //     id: 24,
            //     icon: <EditIcon className = {styles.sideBarSubMenuIcon}/>,
            //     text: "Update User Profile",
            //     link: "/users/[1234]",
            // },
            {
                id: 22,
                icon: <PersonAddIcon className = {styles.sideBarSubMenuIcon}/>,
                text: "Add New User",
                link: "/users/add",
            },
            {
                id: 23,
                icon: <FindInPageIcon className = {styles.sideBarSubMenuIcon}/>,
                text: "Review New User Applications",
                link: "/users/review",
            },
        
        ]
    },
    {
        id: 3,
        icon: <SyncIcon className = {styles.sideBarIcon}/>,
        text: "Products",
        link: "/products/",
    },
    {
        id: 4,
        icon: <SettingsIcon className = {styles.sideBarIcon}/>,
        text: "Settings",
        link: "/settings/",
    }
]