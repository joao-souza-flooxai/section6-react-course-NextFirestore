import Header from "../components/Header";
import Link from "next/link";
import Layout from "../components/Layout";
export default function Example(){
    return(
            <Layout>
                <Header message="This message comes from example component!"/>
                <h1>Example</h1>
            </Layout>
    );
}