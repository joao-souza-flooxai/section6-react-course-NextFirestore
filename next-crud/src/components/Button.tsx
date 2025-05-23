interface BotaoProps {
    color?: 'green' | 'blue' | 'gray';
    className?: string;
    children: any;
    onClick?: ()=>void
}

export default function Botao(props: BotaoProps) {
    const color = props.color ?? 'gray';
    return (
        <button
            onClick={props.onClick} 
            className={`bg-gradient-to-r from-${color}-400 to-${color}-700
                          text-white px-4 py-2 rounded-md m-2 ${props.className}`}>
            {props.children}
        </button>
    );
}