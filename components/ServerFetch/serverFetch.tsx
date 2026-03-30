//O cache do fetch em modo server component é bem mais forte do que em modo client component.
//Por padrão o cache é de 60 segundos.

interface Produto {
    nome: string;
    preco: number;
    id: string;
}

const serverFetch = async () => {

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await fetch('https://api.origamid.online/produtos');
    const data = await response.json() as Produto[];
    return (
        <div>
            {data.map((produto) => (
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                    <p>{produto.preco}</p>
                </div>
            ))}
        </div>
    )
    // const data = await fetch('http://localhost:3000/api/data');
    // const json = await data.json();
    // return (
    //     <div>
    //         <h1>ServerFetch</h1>
    //         {json.produtos.map((produto: any) => (
    //             <div key={produto.id}>
    //                 <h1>{produto.nome}</h1>
    //                 <p>{produto.preco}</p>
    //             </div>
    //         ))}
    //     </div>
    // )
}

export default serverFetch;