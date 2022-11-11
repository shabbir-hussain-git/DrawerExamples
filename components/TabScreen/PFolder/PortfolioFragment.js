import { useState } from "react";
import { Button, Text } from "react-native"


const PortfolioFragment = ()=>{


    const [name,nameHandler] = useState('Shabbir');

    return (
        <>
            <Text style={{color:"white"}}>Hi I am PortfolioFragment-{name}</Text>
            <Button title="Portfolio Manager" onPress={nameHandler.bind(this,'Hussain')}></Button>
        </>
    )
}

export default PortfolioFragment;