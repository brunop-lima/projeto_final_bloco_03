import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Farmacia Bloco 3</Link>

                    <div className='flex gap-4'>
                        <Link to="/produtos"className="hover:underline">Produtos</Link>
                        <Link to="/cadastrarproduto"className="hover:underline">Cadastra Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar