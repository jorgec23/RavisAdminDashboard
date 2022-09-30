import {useTheme} from "../../utils/ThemeContext";

export default function ReviewUserApplication(){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Review Account Application')

    return (
        <h1>This should show existing account applications to allow users to purchase from RAVIS.</h1>
    )
}