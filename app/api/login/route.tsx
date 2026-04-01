import { cookies } from "next/headers";

const GET = async () => {
  const response = await fetch('https://api.origamid.online/conta/login', {
  method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: "dog",
            password: "dog"
        })
    });
    if(!response.ok) {
        return Response.json({ error: 'Login failed' });
    } else {
        const data = await response.json();
        (await cookies()).set('token', data.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
        });
        console.log(data);
        return (
            Response.json(data)
        )
    }
}


export { GET };