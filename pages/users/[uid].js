import {useTheme} from "../../utils/ThemeContext";
// import {useRouter} from 'next/router';


export default function UserProfile(){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('View/Edit Profile')


    return (
        <div>
           
        </div>
    )
}