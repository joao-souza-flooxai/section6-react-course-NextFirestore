import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../firebase/db/ClientCollection";
import { useEffect, useState } from "react";
import Client from "../core/Client";
import useTableOrForm from "./useTableOrForm";


export default function useClient(){
  const repo: ClientRepository = new ClientCollection();

  const [cliente, setCliente] = useState<Client>(Client.null());
  const [clients, setClients] = useState<Client[]>([]);
  const [client, setClient] = useState<Client>(Client.null());
  const {tableVisible, showTable, showForm } = useTableOrForm()
    useEffect(getAll, [])

    function getAll() {
    repo.getAll().then(clients => {
        setClients(clients);
        showTable();
    });
    }


    function selectedClient(client: Client) {
        setClient(client);
        showForm();
    }

    async function deletedClient(client: Client) {
        await repo.delete(client);
        getAll();
    }

    async function saveClient(client: Client) {
        await repo.save(client);
        getAll();
    }

    function newClient(){
        setClient(Client.null);
        showForm();
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        deletedClient,
        selectedClient,
        getAll,
        tableVisible,
        showTable
    }
}

