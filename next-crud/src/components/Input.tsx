interface InputProps {
    type?: 'text' | 'number';
    text: string;
    value: any;
    readOnly?: boolean;
    onChangeValue?: (valor:any) => void;
    className?: string
}

export default function Input(props: InputProps) {
    return (

        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
                onChange={e=>props.onChangeValue?.(e.target.value)}
            />
        </div>

    )
}
