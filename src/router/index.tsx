import React,{ lazy } from "react"
import App from "../App"
import Home from "../views/Home"
import NotMatch from "../components/NotMatch"
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("../views/User"))
const Page1 = lazy(()=>import("../views/Page1"))
const Page2 = lazy(()=>import("../views/Page2"))
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"


const LoadinmoduleComponent =(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading</div>}>
    {comp}
    </React.Suspense>
)
const baseRouter =()=>(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={ <Home/>}>
            <Route path="page1" element={LoadinmoduleComponent( <Page1/>)} />
            <Route path="page2" element={LoadinmoduleComponent( <Page2/>)} />
            </Route>
            <Route path="/about" element={LoadinmoduleComponent( <About/>)}></Route>
            <Route path="/user" element={LoadinmoduleComponent( <User/>)}></Route>
            <Route path="*" element={<NotMatch/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
)

export default baseRouter