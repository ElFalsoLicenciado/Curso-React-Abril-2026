import { useState } from 'react';
import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent';
import CardChildren from '../components/CardChildren';
import PropsComponent from '../components/PropsComponent';
import ChildrenComponent from '../components/ChildrenComponent';
import UsuarioComponent from '../components/UsuarioComponent';
import ButtonActionComponent from '../components/ButtonActionComponent'
import ListaComponent from '../components/ListaComponent';
import ProductoComponent from '../components/ProductoComponent';
import SutffComponent from '../components/StuffComponent';

const parametro = Math.floor(Math.random() * 10);


export default function AppView() {
    // useState, miniObjetos. El set se hace cada vez que se renderiza. Se realizan multiples peticiones.
    const [usuario, setUsuario] = useState("nada");
    // Cuando se carga la pagina tambien se puede usar un hook.
    
    const [suma, setSuma] = useState(0);
    const [isTrue, setTrue] = useState(true);
    const [products, setProducts] = useState(
        [
            {id: 1, name: 'Chompu', precio: 1500},
            {id: 2, name: 'Celuco', precio: 1000},
            {id: 3, name: 'Monitol', precio: 900},
            {id: 4, name: 'Mouse', precio:200}
        ]
    )

    const [stuff, setStuff] = useState(
        [
            {id: 1, name: 'Mostaza', instrumento: 'Si'},
            {id: 2, name: 'Mayonesa', instrumento: 'No'},
            {id: 3, name: 'Mermelada', instrumento: 'No'}
        ]
    )

    const handleOnSum = () => {
        const valor = suma + 1
        setSuma(valor)
    }

    const handleOnClick = () => {
        console.log('Me has presionado');
        setUsuario('Alberto')
        setTrue(!isTrue);
    }
    
    const handleSelection = (elemento) => {
        console.log(elemento)
    }
    
    const user = {
        nombre: 'Juan',
        edad: 23
    }
    
    return (
        <div className=' justify-center  items-center content-center'>
            <h1 className='text-5xl font-bold text-center'>APP VIEW</h1>
            {
                // Si es verdadero.
                isTrue ? (
                    <h2> Es verdadero</h2>
                ) 
                // Si es falso. O o else
                : (
                    <h2>Es falso</h2>
                )
            }

            {
                // Se muestra de ahuevo, sin peros. Si es verdadero
                isTrue && (
                    <h1>Es true</h1>
                )
            }
            <div>
                {/* Envio de propiedades a un componente */}
                <SaludoComponent nombre={'Carne'} apellido={'Orto'}/>
                {/* Envio de children */}
                <CardChildren title={'Soy un modal'}>
                    <p>Hola soy el cuyeyo</p>
                </CardChildren>
                <div className='pr2'>
                    <PropsComponent li1={'Mostaza'} li2={'Mayonesa'} li3={'Mermelada'}/>
                    <ChildrenComponent>
                        <ul>
                            <li>{'Mostasa'}</li>
                            <li>{'Mayonesa'}</li>
                            <li>{'Mermelada'}</li>
                        </ul>
                    </ChildrenComponent>
                </div>
                <br/>
                <div>
                    {/* Recorrer todo el objeto de user y mandar los atributos, ojo que tiene que nombrarse igual.*/}
                    <UsuarioComponent {...user}/>
                </div>
                <div>
                    {/* Se puede mandar la funcion asi: onClick={handleOnClick()}, esto hace que se ejecuta automaticamente pero no se ejecute otra vez cuando se le pida. */}
                    <ButtonActionComponent onClick={handleOnClick} texto={'Hazme click'}/>
                </div>
                <div>
                    <ListaComponent onSeleccionar={handleSelection}/>
                </div>
                <div>
                    <p className='border-2'>{usuario}</p>
                </div>
                <div className='px-3 py-3 flex flex-col gap-y-2 justify-center text-center content-center'>
                    <ButtonActionComponent onClick={handleOnSum} texto={'Click para suma'}/>
                    <p>{suma}</p>
                </div>
                <div className='px-3 py-3 flex flex-col gap-y-2 justify-center text-center content-center border-8 border-transparent'>
                    <ProductoComponent name={'Tenis Adodas'} precio={25} id={5} />
                    {/* For each pero con mapeo 
                        Recorre los elementos, y a cada elemento se le asigna el nombre de producto para manejarlos*/}
                    {
                        products.map((producto) => (
                            <ProductoComponent name={producto.name} precio={producto.precio} id={producto.id} />
                        ))
                    }
                    {
                        stuff.map((s) => (
                            <SutffComponent className='flex justify-center content-center align-middle' name={s.name} instrumento={s.instrumento} id={s.id}/>
                        ))
                    }
                </div>
            </div>
            <div className='px-3 py-3 flex flex-col gap-y-2 justify-center text-center content-center border-4'> 
                <Link to={`/parametro/${parametro}`} className=''>
                    Link to parametro
                </Link>
            </div>
        </div>
    )
}
