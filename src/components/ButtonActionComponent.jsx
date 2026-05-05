// FUNCIONES
export default function ButtonActionComponent({onClick, texto}) {
  return (
    <button className='button-simple' onClick={onClick}>{texto}</button>
  )
}
