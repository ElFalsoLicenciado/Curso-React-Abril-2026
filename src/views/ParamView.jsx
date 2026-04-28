import { useParams } from "react-router-dom"

export default function ParamView() {
  
    const parametro = useParams()
    // Usar el nombre del parametro establecido en el Router.
    const id = parametro.id

    return (
        <>
            <div>
                <h1 className='text-4xl font-bold text-center align-middle justify-center'>El parametro es: {id}</h1>
            </div>
        </>
  )
}
