import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent';
import CardChildren from '../components/CardChildren';
import PropsComponent from '../components/PropsComponent';
import ChildrenComponent from '../components/ChildrenComponent';
import UsuarioComponent from '../components/UsuarioComponent';
import ButtonActionComponent from '../components/ButtonActionComponent'
import ListaComponent from '../components/ListaComponent';

const parametro = Math.floor(Math.random() * 10);

const handleOnClick = () => {
    console.log('Me has presionado');
}

const handleSelection = (elemento) => {
    console.log(elemento)
}

export default function AppView() {

    const user = {
        nombre: 'Juan',
        edad: 23
    }

    return (
      <>
          <h1 className='text-5xl font-bold text-center'>APP VIEW</h1>
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
                    <ButtonActionComponent onClick={handleOnClick}/>
                </div>
                <div>
                    <ListaComponent onSeleccionar={handleSelection}/>
                </div>
          </div>
          <div> 
                <Link to={`/parametro/${parametro}`} className=''>
                    Link to parametro
                </Link>
          </div>
      </>
    )
}
