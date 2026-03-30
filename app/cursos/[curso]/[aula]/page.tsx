type PageParams = {
  curso: string;
  aula: string;
};

const AulaPage = async ({ params }: { params: Promise<PageParams> }) => {
  const { curso, aula } = await params;

  return (
    <div>
      <h1>Curso: {curso}</h1>
      <h2>Aula: {aula}</h2>
    </div>
  );
};

export default AulaPage;
