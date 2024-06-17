import { Link } from 'react-router-dom';
import './aluno.css';

function Aluno() {
    return (
        <>
            <div className="alunoPage">
                <div className='alunoPage_header'>
                    <img src="https://alu-cek.com.br/web/wp-content/uploads/2016/09/logo-senai.fw_.png" alt="" className='senaiLogo' />
                    <Link to={'/idev2'} className='linkHome'>Voltar para Turma</Link>
                </div>
                <div className="alunoPage_title">
                    <h1>Alexandre Magalhães Deboletta</h1>
                </div>
                <div class="alunoPage_content">
                    <div class="alunoPage_content_img">
                        <img
                            src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" />
                    </div>
                    <div>
                        <div class="alunoPage_content_information">
                            <form action="" id="formAluno">
                                <div>
                                    <h2>Email</h2>
                                    <input class="inputAluno" type="text" name="email" value="{{aluno.email}}"></input>
                                </div>
                                <div>
                                    <h2>CPF</h2>
                                    <input class="inputAluno" type="text" name="cpf" value="{{aluno.cpf}}" disabled></input>
                                </div>
                                <div>
                                    <h2>Celular</h2>
                                    <input class="inputAluno" type="text" name="celular" value="{{aluno.celular}}"></input>
                                </div>
                                <div>
                                    <h2>Cep</h2>
                                    <input class="inputAluno" type="text" name="cep" value="{{aluno.cep}}"></input>
                                </div>
                                <div>
                                    <h2>Logradouro</h2>
                                    <input class="inputAluno" type="text" name="logradouro" id="rua"
                                        value="{{aluno.logradouro}}"></input>
                                </div>
                                <div>
                                    <h2>Bairro</h2>
                                    <input class="inputAluno" type="text" name="bairro" id="bairro" value="{{aluno.bairro}}"></input>
                                </div>
                                <div>
                                    <h2>Cidade</h2>
                                    <input class="inputAluno" type="text" name="cidade" id="cidade" value="{{aluno.cidade}}"></input>
                                </div>
                                <div>
                                    <h2>Estado</h2>
                                    <input class="inputAluno" type="text" name="estado" id="uf" value="{{aluno.estado}}"></input>
                                </div>
                                <div class="buttonsAluno">
                                    <button type="submit" id="buttonSubmitAluno">Alterar</button>
                                    <button type="reset" id="buttonResetAluno">Cancelar</button>
                                </div>
                            </form>
                        </div>
                        <div class="alunoPage_formOcorrencia">
                            <h2>Adicionar ocorrência</h2>
                            <form action="">
                                <div>
                                    <input type="text" name="cpfAluno" value="{{aluno.cpf}}" class="inputCpfAluno"></input>
                                    <select name="tema" required>
                                        <option value="-">Selecione o tema principal da ocorrência</option>
                                        <option value="Indisciplina em sala de aula">Indisciplina em sala de aula</option>
                                        <option value="Comportamento desrespeitoso">Comportamento desrespeitoso</option>
                                        <option value="Falta de material escolar">Falta de material escolar</option>
                                        <option value="Atraso">Atraso</option>
                                        <option value="Uniforme inadequado">Uniforme inadequado</option>
                                        <option value="Uso inadequado de dispositivos eletrônicos">Uso inadequado de
                                            dispositivos
                                            eletrônicos</option>
                                        <option value="Violação de políticas de segrança">Violação de políticas de segrança
                                        </option>
                                        <option value="Não realizou a atividade">Não realizou a atividade</option>
                                    </select>
                                    <input type="date" name="data" placeholder="Data do acontecimento" required></input>
                                </div>
                                <textarea name="descricao" placeholder='Descrição' required></textarea>
                                <button type='submit'>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="alunoPage_ocorrencias">
                    <h2>Todas as ocorrências</h2>
                    <div class="ocorrencias">
                        <div class="alunoPage_ocorrencia">
                            <h3>Indisciplina em sala de aula - 14/05/2023</h3>
                            <p>Dormiu durante a explicação</p>
                        </div>
                        <div class="alunoPage_ocorrencia">
                            <h3>Indisciplina em sala de aula - 14/05/2023</h3>
                            <p>Dormiu durante a explicação</p>
                        </div>
                        <div class="alunoPage_ocorrencia">
                            <h3>Indisciplina em sala de aula - 14/05/2023</h3>
                            <p>Dormiu durante a explicação</p>
                        </div>
                        <div class="alunoPage_ocorrencia">
                            <h3>Indisciplina em sala de aula - 14/05/2023</h3>
                            <p>Dormiu durante a explicação</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Aluno