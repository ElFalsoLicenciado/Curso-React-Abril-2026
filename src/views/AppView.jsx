import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent';
import CardChildren from '../components/CardChildren';
import PropsComponent from '../components/PropsComponent';
import ChildrenComponent from '../components/ChildrenComponent';
import UsuarioComponent from '../components/UsuarioComponent';

const parametro = Math.floor(Math.random() * 10);


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
          </div>
          <div> 
                <Link to={`/parametro/${parametro}`} className=''>
                    Link to parametro
                </Link>
          </div>
      </>
    )
}
