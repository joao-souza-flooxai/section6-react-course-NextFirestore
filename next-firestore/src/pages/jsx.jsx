export default function Jsx() {
    const a = 4;
    const b = 3;
    console.log(a * b);
    const obj = {nome: 'João', idade: '30'};
    const title = <h1>JSX é um conceito Central</h1>

    function subtitle(){
        return  <h2>{ "muito legal".toUpperCase() }</h2>
    }
    return (
        <div>
            {title}
            {subtitle}
            <p>
                {JSON.stringify(obj)}
            </p>
        </div>
    );
}