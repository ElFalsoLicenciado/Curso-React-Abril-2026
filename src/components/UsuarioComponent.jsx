export default function UsuarioComponent({nombre, edad}) {
  return (
    <div className='flex flex-col gap-y-5'>
        <p>Tu nombre es: {nombre}</p>
        <p>Tienes: {edad} anos</p>
    </div>
  );
}
