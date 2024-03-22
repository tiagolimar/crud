import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PriceContext = createContext();

export function PriceProvider ({children}){
    const [price, setPrice] = useState(0)

    async function getPriceSum(){
        const dados = await axios.get('http://localhost:5000/listar');
        const sum = dados.data.reduce((total,item)=>{
            return total + (+item.preco)
        },0)
        console.log(1);
        setPrice(sum);
    }

    getPriceSum();
    
    return (
        <PriceContext.Provider value={{price, getPriceSum}}>
            {children}
        </PriceContext.Provider>
    );
}