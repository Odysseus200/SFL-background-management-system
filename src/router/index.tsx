import React,{ lazy } from "react"
import App from "../App"
import Home from "../views/Home"
// import About from "../views/About"
// import User from "../views/User"
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("../views/User"))
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

const baseRouter =()=>(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<React.Suspense fallback={<div>Loading</div>}><About /></React.Suspense>}></Route>
            <Route path="/user" element={<React.Suspense fallback={<div>Loading</div>}><User /></React.Suspense>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
)

export default baseRouter