export default function CardChildren({children, title}) {
    return (
        <div className="bg-green-400 border-2 rounded-2xl shadow-2xl p-5 flex flex-col justify-center text-center align-middle content-center"> 
            <h1>{title}</h1>
            {children} 
            <button className='button-simple'>Soy un boton</button>
        </div>
    );
}
