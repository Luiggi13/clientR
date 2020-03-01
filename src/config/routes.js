// layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Adming pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

// pages

import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routes = [
    {
        path: "/admin",
        exact: false,
        component: LayoutAdmin,
        routes: [
            {
                path: "/admin",
                exact: true,
                component: AdminHome
            },
            {
                path: "/admin/login",
                exact: true,
                component: AdminSignIn
            }
        ]
    },
    {
        path: "/",
        exact: false,
        component: LayoutBasic,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/contact",
                exact: true,
                component: Contact
            }
        ]
    }
];

export default routes;
