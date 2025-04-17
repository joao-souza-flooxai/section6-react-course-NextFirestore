import Layout from "../components/Layout";
import styles from "../styles/Stylist.module.css";
import Link from "next/link";
export default function Stylist(){
    return(
      
        <Layout>
            <div className={styles.roxo}>
                <h1>CSS module</h1>
            </div>
        </Layout>
    
    )
}