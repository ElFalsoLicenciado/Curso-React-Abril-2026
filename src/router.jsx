import { BrowserRouter, Routes, Route } from 'react-router-dom' //Tomamos partes o fragmentos de la libreria.
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import Pr1View from './views/Pr1View'
import ParamView from './views/ParamView'
import ProductLayout from './layouts/ProductLayout'
import MainView from './views/MainView'
import ProductsView from './views/ProductsView'
import CreateProductView from './views/CreateProductView'
import EditProductView from './views/EditProductView'


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

                <Route element={<ProductLayout />}>
                    <Route path='/' element={<MainView />} index />
                    <Route path='/products' element={<ProductsView />} />
                    <Route path='/products/create' element={<CreateProductView />} />
                    <Route path='/products/:id' element={<EditProductView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}