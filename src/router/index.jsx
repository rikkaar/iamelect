import React from "react";
import NotFound from "../pages/NotFound.jsx";
import Main from "../pages/Main.jsx";
import BabyStyle from "../pages/BabyStyle.jsx";


export const routes = [
    {path: "/", element: Main},
    {path: "/service/babystyle", element: BabyStyle},
    {path: "/*", element: NotFound}
]