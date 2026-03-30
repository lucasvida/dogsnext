'use client';

import { useEffect, useState } from "react";

const clientFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.origamid.online/produtos')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div>
            <h1>ClientFetch</h1>
            {data.map((produto: any) => (
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                    <p>{produto.preco}</p>
                </div>
            ))}
        </div>
    )
}

export default clientFetch;