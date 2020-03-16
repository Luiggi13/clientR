// layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Adming pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminMenuWeb from "../pages/Admin/MenuWeb";

// pages

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";

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
            },
            {
                path: "/admin/users",
                exact: true,
                component: AdminUsers
            },
            {
                path: "/admin/menu",
                exact: true,
                component: AdminMenuWeb
            },
            {
                component: Error404
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
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;
