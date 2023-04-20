import React from "react";
import NotFound from "../pages/NotFound.jsx";
import Main from "../pages/Main.jsx";


export const routes = [
    {path: "/", element: Main},
    {path: "/*", element: NotFound}
]