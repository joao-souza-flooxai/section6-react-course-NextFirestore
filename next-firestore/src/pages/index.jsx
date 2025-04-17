import Link from "next/link";
import Navigator from "../components/Navigator";

export default function Home(){
  return (
    <>
      <h1>Home page</h1> 
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh"
      }}>
        
        <Navigator name="Stylist" link="/stylist"/>
        <Navigator name="Example" link="/example"/>
        <Navigator name="Jsx" link="/jsx"/>
        <Navigator name="Navegation/index.jsx" link="/navegation"/>
        <Navigator name="Client/[getClient]" link="/client/123"/>
        <Navigator name="State" link="/state"/>
        <Navigator name="Integration" link="/integration"/>
      </div>
    </>
  );
}