import ListarProdutos from "../../components/produtos/listarprodutos/ListarProdutos"
import ModalProduto from "../../components/produtos/modalprodutos/ModalProduto"

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo
                        </h2>
                        <p className='text-xl'>
                            Como podemos te ajudar Hoje
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white border-white border-solid border-2 py-2 px-4'>
                                <ModalProduto />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://cdn.discordapp.com/attachments/1306319291171471411/1343911654408065044/home.png?ex=67befec3&is=67bdad43&hm=d18ac6e8fb675966ebed620960266ac7cc7d686754a7bbd7fde188c28b88c53d&"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListarProdutos />
        </>
    )
}

export default Home
