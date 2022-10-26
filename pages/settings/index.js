import {useTheme} from "../../utils/ThemeContext";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";


const optionsA = ['order number', 'user name', 'date', 'location'];
const optionsB = ['order number', 'user name'];
const optionsC = ['order number'];
export default function settings({data}){
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Settings')
    return (
        
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center',height:'100%'}}>
            <SearchBar category = "Products" fieldsToSearch={optionsB}/>
        </div>
    )
}