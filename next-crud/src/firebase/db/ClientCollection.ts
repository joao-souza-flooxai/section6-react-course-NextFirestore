import firebase from "firebase";
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class ClientCollection implements ClientRepository {

    #conversor = {
        toFirestore(client: Client) {
            return {
                nome: client.name,
                idade: client.age,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, 
                      options: firebase.firestore.SnapshotOptions): Client 
        {
            const dados = snapshot.data(options)
            return new Client(dados.name, dados.idade, snapshot.id)
        }
    }

    async save(client: Client): Promise<Client> {
        if(client?.id) {
            await this.collection().doc(client.id).set(client)
            return client
        } else {
            const docRef = await this.collection().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async delete(client: Client): Promise<void> {
        return this.collection().doc(client.id).delete();
    }

    async getAll(): Promise<Client[]> {
        const query = await this.collection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private collection() {
        return firebase
            .firestore().collection('clients')
            .withConverter(this.#conversor)
    }
}

