import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

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


export async function POST(request: NextRequest) {
  const params = request.nextUrl.searchParams.get('busca');
  const body = await request.json();
  return Response.json({ method: 'POST', params, body });
}