import Link from "next/link";
import Navigator from "../components/Navigator";

export default function Home(){
  return (
    <>
      <h1>Home page</h1> 
      <Navigator name="Stylist" link="/stylist"/>
      <Navigator name="Example" link="/example"/>
      <Navigator name="Jsx" link="/jsx"/>
    </>
  );
}