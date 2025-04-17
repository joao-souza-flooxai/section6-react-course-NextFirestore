import Layout from "../components/Layout";
import {useState} from "react";
export default function State(){

    //Usando a desestruturação de Array no useState(variavel/função)
    const [numero, setNumero] = useState(0);

    function inc(numero){
       numero++;
       setNumero(numero);
    }


    return(
        <Layout>
            <h1>State Component</h1>
            <span>{numero}  </span>
            <button className="btn" onClick={()=>inc(numero)}>Inc</button>
        </Layout>
    )
}