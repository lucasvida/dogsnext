const Cursos = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = await params;
    return (
        <div>
            <h1>Cursos</h1>
            {slug.map((item, index) => {
                console.log(item)
                if (item.includes('%20')) {
                    return <p key={index}>Curso {item.replace('%20', ' ')}</p>
                }
                return <p key={index}>Curso {item}</p>
            })}
        </div>
    )
}

export default Cursos;