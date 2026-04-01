import { cookies } from "next/headers";

const GET = async () => {
    const cookie = (await cookies()).get('token');
    return (
        Response.json({ cookie })
    )
}

export { GET };