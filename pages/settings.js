// import Layout from "../components/Layout";
import {useTheme} from "../utils/ThemeContext";

export default function settings(){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Settings')

    return (
        <h1>{mainNavBarTitle}</h1>
    )
}