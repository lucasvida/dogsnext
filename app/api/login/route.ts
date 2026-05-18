import { cookies } from "next/headers";

export async function GET() {

    const response = await fetch('https://api.origamid.online/conta/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'dog',
            password: 'dog',
        }),
    });

    if (!response.ok) {
        return Response.json({ erro: 'Dados incorretos.' }, { status: 401 })
    }
    const data = await response.json();
    const cookieStore = await cookies();
    cookieStore.set('token', data.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
    })

    return Response.json(data)
}
