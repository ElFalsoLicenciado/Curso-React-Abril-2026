export default function ProductoComponent(props) {
  return (
        <div className='m-5 p-3 border-2 rounded bg-purple-200 justify-center content-center align-middle mx-auto'>
            <div className='flex flex-col gap-2'>
                <h2>{props.name}</h2>
                <h2>{props.precio}</h2>
                <h2>{props.id}</h2>
            </div>
        </div>
    )
}
