const Curso = async ({ params }: { params: Promise<{ curso: string }> }) => {
    const { curso } = await params;
    return (
        <div>
            <h1>Curso {curso}</h1>
        </div>
    )
}

export default Curso;