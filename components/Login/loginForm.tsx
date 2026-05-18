'use client'

const loginForm = () => {
    return (
        <form>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Entrar</button>
        </form>
    )
}

export default loginForm;