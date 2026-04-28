import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent';

const parametro = Math.floor(Math.random() * 10);


export default function AppView() {

    return (
      <>
          <h1 className='text-5xl font-bold text-center'>APP VIEW</h1>
          <div>
              {/* Envio de propiedades a un componente */}
              <SaludoComponent nombre={'Carne'} apellido={'Orto'}/>
          </div>
          <div> 
                <Link to={`/parametro/${parametro}`} className=''>
                    Link to parametro
                </Link>
          </div>
      </>
    )
}
