import './cadastro.css';

function Cadastro() {
    return (
        <>
            <div className="cadastroImg">
                <img src="https://alu-cek.com.br/web/wp-content/uploads/2016/09/logo-senai.fw_.png" alt="" />
            </div>

            <div className="cadastroPage">
                <div className="cadastroPage_form">
                    <h1>Faça seu cadastro aqui!</h1>
                    <form action="/">
                        <label htmlFor="">Nome</label>
                        <input type="text" name="" id="" placeholder='Insira seu nome completo aqui' required/>
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" placeholder='Insira seu email aqui' required/>
                        <label htmlFor="">Senha</label>
                        <input type="password" name="" id="" placeholder='Insira sua senha aqui' required/> 
                        <label for="cpf">CPF: </label>
                        <input type="text" name="cpf" placeholder="Insira seu CPF aqui"></input>
                        <label for="celular">Celular: </label>
                        <input type="text" name="celular" placeholder="Insira seu celular aqui"></input>
                        <label for="cep">CEP: </label>
                        <input type="text" name="cep" placeholder="Insira seu Cep aqui"></input>
                        <label for="logradouro">Logradouro: </label>
                        <input type="text" name="logradouro" id="rua" placeholder="Insira seu logradouro aqui"></input>
                        <label for="bairro">Bairro: </label>
                        <input type="text" name="bairro" id="rua" placeholder="Insira seu bairro aqui"></input>
                        <label for="cidade">Cidade: </label>
                        <input type="text" name="cidade" id="rua" placeholder="Insira seu cidade aqui"></input>
                        <label for="estado">Estado: </label>
                        <input type="text" name="estado" id="rua" placeholder="Insira seu estado aqui"></input>
                        <div className='cadastroPage_form_buttons'>
                            <button type='submit'>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cadastro