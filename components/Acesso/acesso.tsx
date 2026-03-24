import fs from 'fs/promises';

const Acesso = async () => {
  await fs.appendFile('acesso.txt', `${Date.now()}\n`, 'utf-8');
  const data = await fs.readFile('acesso.txt', 'utf-8');
  return (
    data
  )
}

export default Acesso;