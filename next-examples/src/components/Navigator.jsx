import Link from "next/link";
import styles from "../styles/Navigator.module.css" ;


export default function Navigator(props){

    return (
        <Link href={props.link}>
            
            <div className={styles.navigator}>
                {props.name}  
            </div>
                                                                    
        </Link>
    )
}