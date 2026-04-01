import { cookies } from 'next/headers';

export async function GET() {
  const cookie = (await cookies()).get('token');
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${cookie?.value}`
    },
  });
  const data = await response.json();

  return Response.json(data);
}
