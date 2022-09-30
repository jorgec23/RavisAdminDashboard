import {useTheme} from "../../utils/ThemeContext";


export default function settings(){

    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Settings')

    return (
        <div>
            <h1>Not sure what settings I want to include here to be honest ...</h1>
            <p>checking my giggles, {process.env.NEXT_PUBLIC_word_1} and {process.env.word_2}</p>
        </div>
    )
}