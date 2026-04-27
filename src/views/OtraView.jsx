import { Link } from "react-router-dom";

export default function OtraView() {
  return (
    <>
        <h1 className='text-5xl font-bold text-center'>OTRA VIEW</h1>
        <Link to={'/main'}>Ir a la pagina</Link>
    </>
  )
}
