import Link from "next/link";
import styles from "../styles/Layout.module.css"
export default function Layout(props){
    return(
        <div className={styles.layout}>
            
            <div className={styles.header}>
                <Link href="/" >Home</Link>
            </div>

            <div className={styles.content}>
                {props.children}
            </div>

        </div>
    )
}