import { BrowserRouter, Routes, Route } from 'react-router-dom' //Tomamos partes o fragmentos de la libreria.
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import Pr1View from './views/Pr1View'
import ParamView from './views/ParamView'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<AppView/>}/>
                    <Route path='/otra' element={<OtraView/>}/>
                    <Route path='/pr1' element={<Pr1View/>}/>
                    {/* URI, lo que tiene en los dos puntitos es el parametro: id. */}
                    <Route path='/parametro/:id' element={<ParamView/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}