import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias'
import FormCategoria from './components/categorias/formcategorias/FormCategorias'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto'
import FormProduto from './components/produtos/formprodutos/FormProdutos'
import ListarProdutos from './components/produtos/listarprodutos/ListarProdutos'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria/>} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App