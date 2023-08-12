import React from 'react';

import './App.css';
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import RegistrationPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import BlankPage from "./pages/page/BlankPage";


const router = createBrowserRouter([
    {path: "*", Component: Root},
]);


function Root() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register/" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/blank" element={<BlankPage/>}/>

        </Routes>
    );
}

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
