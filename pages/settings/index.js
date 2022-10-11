import {useTheme} from "../../utils/ThemeContext";


export default function settings({data}){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Settings')
    return (
        
        <div>
            <h1>Not sure what settings I want to include here to be honest ...</h1>
        </div>
    )
}