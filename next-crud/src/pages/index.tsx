import Layout from "../components/Layout";
import Table from "../components/Table"
import Client from "../core/Client";
import Button from "../components/Button";
import { useState } from "react";
import Form from "../components/Form";
export default function Home() {

  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [client, setClient] = useState<Client>(Client.null());

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4'),
  ];

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function deletedClient(client: Client) {
    console.log("Deleted client:", client);
    setVisible("form");
  }

  function saveClient(client: Client) {
    console.log("Saved client:", client);
    setVisible("table");
  }

  function newClient(){
    setClient(Client.null);
    setVisible("form");
  }
  
  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white"
    >
      <Layout title="Simple Registration">
        
        {visible ==='table' ? (
            <>
              <div className="flex justify-end">
                <Button color="green" onClick={newClient}>New Client</Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                deletedClient={deletedClient} 
              />
            </>
          ): (

            <Form 
              client={client}
              onChangeClient={saveClient}
              canceled={()=>setVisible('table')}
            />

          )
        }
        
      
      </Layout>
    </div>
  );
}