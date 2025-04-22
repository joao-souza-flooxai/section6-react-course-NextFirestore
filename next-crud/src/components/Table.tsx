import Cliente from "../core/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface TabelaProps {
  clients: Cliente[];
  selectedClient?: (cliente: Cliente) => void;
  deletedClient?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {

  const showActions = props.deletedClient || props.selectedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Id</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions ? <th className="p-4">Actions</th> : null}
      </tr>
    );
  }

  function renderTableContent() {
    return props.clients.map((client, i) => (
      <tr key={i} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
        <td className="text-left p-4">{client.id}</td>
        <td className="text-left p-4">{client.name}</td>
        <td className="text-left p-4">{client.age}</td>
        {showActions ? renderActions(client) : null}
      </tr>
    ));
  }

  function renderActions(client: Cliente) {
    return (
      <td className="flex justify-center">
        {props.selectedClient && (
          <button 
            className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"
            onClick={() => props.selectedClient?.(client)} 
          >
            {EditIcon}
          </button>
        )}

        {props.deletedClient && (
          <button 
            className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50"
            onClick={() => confirm(`Do you really wanna delete the client: ${client.id}?`) ? props.deletedClient?.(client): false} 
          >
            {TrashIcon}
          </button>
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
        {renderHeader()}
      </thead>

      <tbody>
        {renderTableContent()}
      </tbody>
    </table>
  );
}
