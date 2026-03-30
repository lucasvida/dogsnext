import Acesso from '@/components/Acesso/acesso';
import ServerFetch from '@/components/ServerFetch/serverFetch';
import ClientFetch from '@/components/ClientFetch/clientFetch';

export default async function HomePage() {
  
  return (
    <main>  
      <h1>HomePage</h1>
      <Acesso />
      <ServerFetch />
      {/* <ClientFetch /> */}
    </main>
  );
}
