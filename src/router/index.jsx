import React from "react";
import NotFound from "../pages/NotFound.jsx";
import Main from "../pages/Main.jsx";
import BabyStyle from "../pages/BabyStyle.jsx";
import Transformation from "../pages/Transformation.jsx";
import Wardrobe from "../pages/Wardrobe.jsx";
import ShopAssistance from "../pages/ShopAssistance.jsx";
import Mentoring from "../pages/Mentoring.jsx";
import PhotoShoot from "../pages/PhotoShoot.jsx";


export const routes = [
    {path: "/", element: Main},
    {path: "/service/babystyle", element: BabyStyle},
    {path: "/service/transformation", element: Transformation},
    {path: "/service/wardrobe", element: Wardrobe},
    {path: "/service/shopAssistance", element: ShopAssistance},
    {path: "/service/mentoring", element: Mentoring},
    {path: "/service/photoshoot", element: PhotoShoot},
    {path: "/*", element: NotFound}
]