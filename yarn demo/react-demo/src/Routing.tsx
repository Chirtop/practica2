import React from "react";
import {BrowserRouter as Route} from "react-router"
import {Home} from "./pages/home"
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

export const Routing = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<Home />} />
            <Route path ={"/player"} element = {<Player/>}/>
    </Route>
        )
    )
    return <RouterProvider router={router}/>
}