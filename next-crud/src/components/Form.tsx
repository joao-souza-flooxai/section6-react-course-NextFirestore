import { useState } from "react";
import Input from "../components/Input";
import Client from "../core/Client";
import Button from "../components/Button"
import AppPageRouteModule from "next/dist/server/route-modules/app-page/module";


interface FormProps {
    client: Client,
    onChangeClient?: (client: Client) => void;
    canceled?: ()=>void;
}

export default function Form(props: FormProps) {

    const id = props.client?.id;
    const [name, setName] = useState(props.client?.name ?? '');
    const [age, setAge] = useState(props.client?.age ?? 0);

    return (
        <div>
            {id  ?  
                <Input 
                    readOnly
                    text="Id"
                    value={id} 
                    className="mb-4"
                />

                : false
            }
           
            <Input
                text="Name"
                value={name}
                onChangeValue={setName}
                className="mb-4"
            />
            <Input
                text="Age"
                type = "number"
                value={age}
                onChangeValue={setAge}
            />

            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2" onClick={()=>props.onChangeClient?.(new Client(name,+age,id))}>
                    {id ? "Edit" : "Save"}
                </Button>

                <Button onClick={props.canceled} >
                    Cancel
                </Button>
            </div>



        </div>
    );

}