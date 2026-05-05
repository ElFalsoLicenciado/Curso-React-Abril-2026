export default function SutffComponent(props) {
  return (
        <div class="w-64 rounded-xl bg-linear-to-r from-red-500  via-green-500 to-purple-500 bg-rainbow animate-rainbow shadow-xl blur-[0.5px]">
            <div className='flex flex-col gap-2'>
                <h2>Nombre: {props.name}</h2>
                <h2>Es un instrumento: {props.instrumento}</h2>
                <h2>Id: {props.id}</h2>
            </div>
        </div>
    )
}
