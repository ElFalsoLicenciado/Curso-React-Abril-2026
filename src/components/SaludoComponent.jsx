// Las propiedades se definen entre {}. Si queremos ahorrar todo ese pedo, usar props.
export default function SaludoComponent(props) {
    return (
        <div className='bg-red-200 font-bold rounded-2xl border-2 text-center justify-center align-middle'> Hola desde un componente: {props.nombre + ' ' + props.apellido}</div>
    );
}
