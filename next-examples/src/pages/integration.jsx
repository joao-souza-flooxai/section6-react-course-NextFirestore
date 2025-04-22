import { useState } from "react";
import Layout from "../components/Layout";

export default function Integracao() {

    const [client,setClient] = useState({});
    const [code, setCode] = useState(0)
    function getClients(code=123){
        fetch(`http://localhost:3000/api/clients/${code}`)
        .then(resp => resp.json())
        .then(dados => setClient(dados));
    }
  

    return (
        <Layout>
 
            <ul>
                <li>Code: {client?.id} </li>
                <li>Name: {client?.name} </li>
                <li>Email: {client?.email} </li>
            </ul>
            <button onClick={() => getClients(code)}>Obter Cliente</button>
            <input type="text" name="" id="" value={code} onChange={e=>setCode(e.target.value)}/>
        </Layout>
    );
}
