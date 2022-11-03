import {useTheme} from "../../utils/ThemeContext";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";



const optionsA = ['order number', 'user name', 'date', 'location'];
const optionsB = ['order number', 'user name'];
const optionsC = ['order number'];
export default function settings({data}){
    const { data:session} = useSession();
    console.log(session);



    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Settings')

    if (session) {
       return (
        
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center',height:'100%'}}>
            <SearchBar category = "Products" fieldsToSearch={optionsB}/>
            <br />
            <button onClick={() => signOut()}>Sign out</button>
        </div>
        ) 
      

    }
    return(
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
    
}