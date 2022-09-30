import {useTheme} from "../../utils/ThemeContext";
import {useRouter} from 'next/router';

export default function UserProfile(){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('View/Edit Profile')

    const router = useRouter()
    const{uid} = router.query

    return (
        <div>
            <h1>{uid} is the unique user id of the customer whose information should show up here.</h1>
            <p>maybe include a validation step here, if the uid entered manually from the search bar is not found, conditional rendering! </p>
        </div>
    )
}