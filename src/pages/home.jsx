import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <>
            <div className="homePage">
                <div className='homePage_header'>
                    <img src="https://alu-cek.com.br/web/wp-content/uploads/2016/09/logo-senai.fw_.png" alt="" className='senaiLogo' />
                    <input type="text" placeholder='Busque uma turma' />
                </div>
                <div className="homePage_turmas">
                    <div className="turma">
                        <Link to={'/idev1'} className='link'>
                            <div className="turma_top">
                                <h1>IDEV1</h1>
                                <p>Desenvolvimento de sistemas - 2022</p>
                            </div>
                            <p className='turma_arrow'>&gt;</p>
                        </Link>
                    </div>
                    <div className="turma">
                        <Link to={'/ielec1'}>
                            <div className='turma_top'>
                                <h1>IELE1/IMEC1</h1>
                                <p>Eletroeletrônica e Mecânica - 2022</p>
                            </div>
                            <p className='turma_arrow'>&gt;</p>
                        </Link>
                    </div>
                    <div className="turma">
                        <Link to={'/idev2'} className='link'>
                            <div className="turma_top">
                                <h1>IDEV2</h1>
                                <p>Desenvolvimento de sistemas - 2023</p>
                            </div>
                            <p className='turma_arrow'>&gt;</p>
                        </Link>
                    </div>
                    <div className="turma" >
                        <Link to={'/ielec2'}>
                            <div className='turma_top'>
                                <h1>IELE2/IMEC2</h1>
                                <p>Eletroeletrônica e Mecânica - 2022</p>
                            </div>
                            <p className='turma_arrow'>&gt;</p>
                        </Link>
                    </div>
                    <div className="turma">
                        <Link to={'/idev3'} className='link'>
                            <div className="turma_top">
                                <h1>IDEV3</h1>
                                <p>Desenvolvimento de sistemas - 2024</p>
                            </div>
                            <p className='turma_arrow'>&gt;</p>
                        </Link>
                    </div>
                    <div className="turma">
                        <Link to={'/ielec3'}>
                            <div className='turma_top'>
                                <h1>IELE3/IMEC3</h1>
                                <p>Eletroeletrônica e Mecânica - 2022</p>
                            </div>
                            <p className='turma_arrow'>&gt;</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home