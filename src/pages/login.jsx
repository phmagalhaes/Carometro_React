import './login.css';

function Login() {
    return (
        <>
            <div className="loginImg">
                <img src="https://alu-cek.com.br/web/wp-content/uploads/2016/09/logo-senai.fw_.png" alt="" />
            </div>

            <div className="loginPage">
                <div className="loginPage_form">
                    <h1>Faça seu login aqui!</h1>
                    <form action="/home">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" placeholder='Insira seu email aqui' required/>
                        <label htmlFor="">Senha</label>
                        <input type="password" name="" id="" placeholder='Insira sua senha aqui' required/>
                        <div className='loginPage_form_buttons'>
                            <a href="/cadastro">Não possui cadastro? Clique Aqui</a>
                            <button type='submit'>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login