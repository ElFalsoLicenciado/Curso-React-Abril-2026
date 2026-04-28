import { BrowserRouter, Routes, Route } from 'react-router-dom' //Tomamos partes o fragmentos de la libreria.
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import Pr1View from './views/Pr1View'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/main' element={<AppView/>}/>
                    <Route path='/otra' element={<OtraView/>}/>
                    <Route path='/pr1' element={<Pr1View/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}