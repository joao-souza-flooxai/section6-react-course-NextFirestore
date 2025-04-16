import Header from "../components/Header";
import Link from "next/link";
export default function Example(){
    return(
        <>
            <Link href={"/"}>Home</Link>
            <Header message="This message comes from example component!"/>
            <h1>Example</h1>
        </>
    );
}