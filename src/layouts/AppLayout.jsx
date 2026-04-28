import { Link, Outlet } from 'react-router-dom'


export default function AppLayout() {
  return (
    <div className='justify-center content-center align-middle'>  
        {/* Grid: Agrupar en cajas.  grid-cols: Numero de columnas*/}
        {/* Flex: Indica la capacidad de un elemento para alterar sus dimensiones y llenar el espacio disponible. Distribuciones: flex-row: Horizontal. flex-col: Vertical*/}
        <div className='bg-gray-200 flex flex-col h-dvh bottom-0 top-0'> {/*h-dvh: Ocupar toda la altura. w-dvh: Ocupar toda la anchura.*/}
            <div className='bg-amber-100 h-20 border-b-2 border-b-black text-center justify-center content-center'> {/*h-N: Cuanta porcentaje la altura tomar. border-b: Referente al borde*/}
                <h1>MR. SEXO</h1>
            </div>
            <div className='flex-1 w-[70%] justify-center content-center align-middle'>
                <Outlet />
            </div>
            {/* ESTE ES UN EJEMPLO DE FOOTER */}
            {/* gap-y/gap-x: Es el espacio entre elementos.*/}
            <footer className="bg-amber-100 flex flex-col h-10 gap-y-6 border-t-2 border-t-black justify-center content-center text-center">
                <div className=" flex flex-row gap-x-5 justify-center content-center text-center align-middle h-full">
                    {/*ESTE ES UN EJEMPLO DE FOOTER */}
                    <Link to={'/'} className=" text-black font-bold hover:bg-amber-300 p-1 h-full">
                    MAIN DESDE EL LAYOUT
                    </Link>
                    <Link to={'/otra'} className=" text-black font-bold hover:bg-amber-300 p-1 h-full">
                    OTRA DESDE EL LAYOUT
                    </Link>      
                    <Link to={'/pr1'} className='text-black font-bold hover:bg-amber-300 p-1 h-full '>
                    secret
                    </Link>  
                </div>
            </footer>
            
            {/* <div className='bg-amber-100 grid grid-cols-3 md:grid-cols-1 justify-center content-center text-center'>
                <div>
                    <Link to={'/'} className='text-white bg-green-500 px-2 py-2 rounded-lg font-bold hover:underline hover:bg-green-900 '>Inicio</Link>
                </div>
                <div>
                    <Link to={'/otra'} className=''>Otra</Link>
                </div>
                <div>
                    <Link to={'/pr1'} className='text-white bg-green-500 px-2 py-2 rounded-lg font-bold hover:underline hover:bg-green-900 '>Pr1</Link>
                </div>
                <div>
                    <Link to={'/'} className='text-white bg-green-500 px-2 py-2 rounded-lg font-bold hover:underline hover:bg-green-900 '>Redundancia</Link>
                </div>
            </div> */}
        </div>
    </div>
  )
}
