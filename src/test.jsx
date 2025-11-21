

import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'

import Layout from './reactComponets/Layout'
import Home from './reactComponets/Home'
import Add_Post from './reactComponets/Add_Post'
import About from './reactComponets/About'
import Edit from './reactComponets/Edit'
import Error from './reactComponets/Error'
import { Color } from './reactComponets/LoadColor'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<Error/>}>
      <Route index  element={<Home/>}/>
      <Route path=':edit' element={<Edit/>}/>
      <Route path='add' element={<Add_Post/>}/>
      <Route path='about' element={<About/>}/>
    </Route>)
)



export function TODOReact() {
  addEventListener('DOMContentLoaded',Color)
  return (<RouterProvider router={router}/>)
}





