import Layout from "../components/Layout";
import Table from "../components/Table"
import Button from "../components/Button";
import Form from "../components/Form";
import useClient from "../hooks/useClient";



export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    deletedClient,
    selectedClient,
    getAll,
    tableVisible,
    showTable
  } = useClient();

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white"
    >
      <Layout title="Simple Registration">
        
        {tableVisible ? (
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
              canceled={showTable}
            />

          )
        }
        
      
      </Layout>
    </div>
  );
}