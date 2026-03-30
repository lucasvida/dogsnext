const Produtos = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Produto</h1>
      <p>{id}</p>
    </div>
  )
}

export default Produtos;