export default function Header(props){
    return(
        <header>
            <h1>Fundamentals in Next: Header exported Global!!!</h1>
            {props.message ? props.message : '' }
        </header>
    );
}