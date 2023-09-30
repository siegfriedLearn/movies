import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Info } from "../pages/Info";

import LayoutPublic from "../layout/LayoutPublic";
import { InfoCasablanca } from "../pages/InfoCasablanca";
import { InfoCitizenKane } from "../pages/InfoCitizenKane";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic></LayoutPublic>,
    errorElement: <h1>Ups, tenemos un problema con esta página</h1>,
    children: [
      {
        //index: true,
         //path: "/",
        path: "/proyecto/",
        element: <Home />,
       
      },
      {
         //path: "/deposit",
        path: "/proyecto/info",
        element: <Info />,
      },
      {
        //path: "/deposit",
       path: "/proyecto/infocasablanca",
       element: <InfoCasablanca />,
     },
     {
      //path: "/deposit",
     path: "/proyecto/infocitizenkane",
     element: <InfoCitizenKane />,
   }
    ],
  },
]);
