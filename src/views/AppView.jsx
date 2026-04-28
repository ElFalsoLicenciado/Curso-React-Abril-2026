import { Link } from 'react-router-dom'

export default function AppView() {
  return (
    <>
        <h1 className='text-5xl font-bold text-center'>APP VIEW</h1>
        <div>
            <Link to={'/otra'}>Ir a otra pagina</Link>
        </div>
        
        <div>
            <Link to={'/pr1'} className='text-[0.5rem]'>SECRET!</Link>
        </div>
    </>
  )
}
