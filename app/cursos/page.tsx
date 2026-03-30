import Link from "next/link";

const Cursos = async () => {
    const response = await fetch('https://api.origamid.online/cursos');
    const data = await response.json();
    return (
        <div>
            <h1>Cursos</h1>
            <ul>
                {data.map((curso: any) => (
                    <li key={curso.id}><Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Cursos;