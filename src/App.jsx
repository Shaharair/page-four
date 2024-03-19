import Home from "./Pages/Home"
import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";
import Service from "./Pages/Service";
import About from "./Pages/pricing/About";
import Main from "./Pages/pricing/Main";


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Service" element={<Service/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Main" element={<Main/>}></Route>
  </Route>
))


function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
