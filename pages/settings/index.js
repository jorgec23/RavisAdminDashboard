import {useTheme} from "../../utils/ThemeContext";


export async function getServerSideProps() {
    const num1 = 10;
    const num2 = 2;
    const res = await fetch(`${process.env.inventoryEndpoint}?${process.env.inventorySecretWord1}=${num1}&${process.env.inventorySecretWord2}=${num2}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export default function settings({data}){
    const {customerList = []} = data;
    const{mainNavBarTitle, setNavBarTitle} = useTheme();
    const setTitle = (title) => {
        setNavBarTitle(title);
    }
    setTitle('Settings')
    return (
        
        <div>
            <h1>Not sure what settings I want to include here to be honest ...</h1>
            <div>
                {customerList.map(product =>{ 
                    const {description, inStock} = product;
                    return (
                    <p>The product {description} has a current stock of {inStock}</p> 
                    )
                    
                })}
            </div>
            
        </div>
    )
}