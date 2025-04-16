import styles from "../styles/Stylist.module.css";
import Link from "next/link";
export default function Stylist(){
    return(
        <div className={styles.roxo}>
           <Link href={"/"}>Home</Link>
            <h1>CSS module</h1>
        </div>
    )
}