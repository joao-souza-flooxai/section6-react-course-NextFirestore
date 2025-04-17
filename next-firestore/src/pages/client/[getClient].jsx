import Layout from "../../components/Layout";
import { useRouter } from "next/router"; 
export default function GetClient(){
    const router = useRouter();
    return(
        <Layout>
            <span>Value on url: {router.query.getClient}</span>
        </Layout>
    )
}