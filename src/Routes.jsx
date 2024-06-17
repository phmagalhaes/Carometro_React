import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Idev2 from "./pages/turmas/idev2";
import Idev1 from "./pages/turmas/idev1";
import Idev3 from "./pages/turmas/idev3";
import Ielec1 from "./pages/turmas/ielec1";
import Ielec2 from "./pages/turmas/ielec2";
import Ielec3 from "./pages/turmas/ielec3";
import Aluno from "./pages/aluno";


function Rotas() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/idev1" element={<Idev1 />} />
                <Route path="/idev2" element={<Idev2 />} />
                <Route path="/idev3" element={<Idev3 />} />
                <Route path="/ielec1" element={<Ielec1 />} />
                <Route path="/ielec2" element={<Ielec2 />} />
                <Route path="/ielec3" element={<Ielec3 />} />
                <Route path="/aluno" element={<Aluno />} />
            </Routes>

        </div>
    )
}

export default Rotas