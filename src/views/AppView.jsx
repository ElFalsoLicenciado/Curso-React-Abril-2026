import { Link } from 'react-router-dom'

export default function AppView() {
  return (
    <>
        <h1 className='text-5xl font-bold text-center'>APP VIEW</h1>
        <Link to={'/otra'}>Ir a otra pagina</Link>
    </>
  )
}
