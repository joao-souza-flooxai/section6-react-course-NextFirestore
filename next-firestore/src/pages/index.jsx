import Link from "next/link";

export default function Home(){
  return (
    <>
      <h1>Home page</h1>
      <h3><Link href={"/stylist"}>Stylist</Link></h3><br />
      <h3><Link href={"/example"}>Example</Link></h3>
    </>
  );
}