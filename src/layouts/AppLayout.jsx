import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
        <div className='bg-gray-200 flex flex-col h-dvh bottom-0 top-0'>
            <div className='bg-amber-100 h-20 border-b-red-50 border-b-black'>
                <h1>MR. SEXO</h1>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
            {/* ESTE ES UN EJEMPLO DE FOOTER */}
            {/* Grid: Agrupar en cajas.  grid-cols: Numero de columnas*/}
            <div className='bg-amber-100 grid grid-cols-3 md:grid-cols-1'>
                <div>
                    <Link to={'/main'} className='text-white bg-green-500 px-2 py-2 rounded-lg font-bold hover:underline hover:bg-green-900 '>Inicio</Link>
                </div>
                <div>
                    <Link to={'/otra'} className=''>Otra</Link>
                </div>
                <div>
                    <Link to={'/pr1'} className='text-white bg-green-500 px-2 py-2 rounded-lg font-bold hover:underline hover:bg-green-900 '>Pr1</Link>
                </div>
                <div>
                    <Link to={'/main'} className='text-white bg-green-500 px-2 py-2 rounded-lg font-bold hover:underline hover:bg-green-900 '>Redundancia</Link>
                </div>
            </div>
        </div>
    </>
  )
}
