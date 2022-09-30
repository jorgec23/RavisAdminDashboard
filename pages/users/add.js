import {useTheme} from "../../utils/ThemeContext";

export default function AddUser(){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Add New User')

    return (
        <h1>Add New User Here! A post request!</h1>
    )
}