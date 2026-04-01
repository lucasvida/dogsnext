//Rota de API não é export default, é export de funções. E não é exportada para o client.
//O nome da função deve ser o método HTTP.


const GET = async () => {
    return (
        Response.json({ message: 'Hello World' })
    )
}

export { GET };