const Aulas = async ({ params }: { params: Promise<{ aulas: string[] }> }) => {
    const { aulas } = await params;
    return (
        <div>
            <h1>Aulas {aulas.join(' ')}</h1>
        </div>
    )
}

export default Aulas;