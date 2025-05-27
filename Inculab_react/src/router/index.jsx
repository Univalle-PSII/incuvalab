import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
import Public from '../pages/Public';
import Private from '../pages/Private';
import Login from '../pages/Public/Login1';
import Loading from '../components/Loading';
import PermissionCheck from '../components/PermissionCheck';

import User_list from "@/pages/Private/admin/user/User_list";
import User_report from "@/pages/Private/admin/user/User_report";
import User_form from "@/pages/Private/admin/user/User_form";
import User_detail from "@/pages/Private/admin/user/User_detail";
import User_profile from "@/pages/Private/admin/user/User_profile";
import User_delete from "@/pages/Private/admin/user/User_delete";

import Group_list from "@/pages/Private/admin/group/Group_list";
import Group_report from "@/pages/Private/admin/group/Group_report";
import Group_form from "@/pages/Private/admin/group/Group_form";
import Group_detail from "@/pages/Private/admin/group/Group_detail";
import Group_delete from "@/pages/Private/admin/group/Group_delete";

import Casos_list from "@/pages/Private/inspiring/casos/Casos_list";
import Casos_report from "@/pages/Private/inspiring/casos/Casos_report";
import Casos_form from "@/pages/Private/inspiring/casos/Casos_form";
import Casos_detail from "@/pages/Private/inspiring/casos/Casos_detail";
import Casos_delete from "@/pages/Private/inspiring/casos/Casos_delete";

import Proyectos_list from "@/pages/Private/partners/proyectos/Proyectos_list";
import Proyectos_report from "@/pages/Private/partners/proyectos/Proyectos_report";
import Proyectos_form from "@/pages/Private/partners/proyectos/Proyectos_form";
import Proyectos_detail from "@/pages/Private/partners/proyectos/Proyectos_detail";
import Proyectos_delete from "@/pages/Private/partners/proyectos/Proyectos_delete";

import Matches_list from "@/pages/Private/partners/matches/Matches_list";
import Matches_report from "@/pages/Private/partners/matches/Matches_report";
import Matches_form from "@/pages/Private/partners/matches/Matches_form";
import Matches_detail from "@/pages/Private/partners/matches/Matches_detail";
import Matches_delete from "@/pages/Private/partners/matches/Matches_delete";

import Mensajes_list from "@/pages/Private/partners/mensajes/Mensajes_list";
import Mensajes_report from "@/pages/Private/partners/mensajes/Mensajes_report";
import Mensajes_form from "@/pages/Private/partners/mensajes/Mensajes_form";
import Mensajes_detail from "@/pages/Private/partners/mensajes/Mensajes_detail";
import Mensajes_delete from "@/pages/Private/partners/mensajes/Mensajes_delete";

// Nuevos módulos públicos
import Partners from '../pages/Public/Partners';
import Inspiring from '../pages/Public/Inspiring';
import Home from "@/pages/Public/Home";
import HomeInspiring from "@/pages/Public/Inspiring/Home";
import ExploreInspiring from "@/pages/Public/Inspiring/Explore";

// Componentes cargados con lazy
const Dashboard = lazy(() => import('@/components/Dashboard3'));
const NotFound = lazy(() => import('@/pages/Public/Errors/404'));

// Renderizador de páginas con permisos
function Page({ Component, permissions }) {
    if (permissions && permissions.length)
        return (
            <PermissionCheck permissions={permissions}>
                <Suspense fallback={<Loading />}>
                    <Component />
                </Suspense>
            </PermissionCheck>
        );
    else
        return (
            <Suspense fallback={<Loading />}>
                <Component />
            </Suspense>
        );
}

const publicRoutes = [
    {
        path: "/",
        element: <Public />,
        children: [
            { path: "", element: <Home /> },
            { path: "partners", element: <Partners /> },
            {
                path: "inspiring",
                element: <Inspiring />,
                children: [
                    { path: "", element: <HomeInspiring /> },
                    { path: "explore", element: <ExploreInspiring /> },
                ]
            }
        ]
    },
    { path: "/login", element: <Login /> },
];

const privateRoutes = [
    {
        element: <Private />,
        children: [
            {
                path: '/dashboard',
                element: <Suspense fallback={<Loading />}><Dashboard /></Suspense>,
                children: [

                    // Users
                    { path: 'user/list', element: <Page Component={User_list} permissions={['read_user']} /> },
                    { path: 'user/report', element: <Page Component={User_report} permissions={['report_user']} /> },
                    { path: 'user/create', element: <Page Component={User_form} permissions={['create_user']} /> },
                    { path: 'user/detail/:id', element: <Page Component={User_detail} permissions={['read_user']} /> },
                    { path: 'user/update/:id', element: <Page Component={User_form} permissions={['update_user']} /> },
                    { path: 'user/profile', element: <Page Component={User_profile} permissions={[]} /> },
                    { path: 'user/delete/:id', element: <Page Component={User_delete} permissions={['delete_user']} /> },

                    // Groups
                    { path: 'group/list', element: <Page Component={Group_list} permissions={['read_group']} /> },
                    { path: 'group/report', element: <Page Component={Group_report} permissions={['report_group']} /> },
                    { path: 'group/create', element: <Page Component={Group_form} permissions={['create_group']} /> },
                    { path: 'group/detail/:id', element: <Page Component={Group_detail} permissions={['read_group']} /> },
                    { path: 'group/update/:id', element: <Page Component={Group_form} permissions={['update_group']} /> },
                    { path: 'group/delete/:id', element: <Page Component={Group_delete} permissions={['delete_group']} /> },

                    // Casos
                    { path: 'casos/list', element: <Page Component={Casos_list} permissions={['read_casos']} /> },
                    { path: 'casos/report', element: <Page Component={Casos_report} permissions={['report_casos']} /> },
                    { path: 'casos/create', element: <Page Component={Casos_form} permissions={['create_casos']} /> },
                    { path: 'casos/detail/:id', element: <Page Component={Casos_detail} permissions={['read_casos']} /> },
                    { path: 'casos/update/:id', element: <Page Component={Casos_form} permissions={['update_casos']} /> },
                    { path: 'casos/delete/:id', element: <Page Component={Casos_delete} permissions={['delete_casos']} /> },

                    // Proyectos
                    { path: 'proyectos/list', element: <Page Component={Proyectos_list} permissions={['read_proyectos']} /> },
                    { path: 'proyectos/report', element: <Page Component={Proyectos_report} permissions={['report_proyectos']} /> },
                    { path: 'proyectos/create', element: <Page Component={Proyectos_form} permissions={['create_proyectos']} /> },
                    { path: 'proyectos/detail/:id', element: <Page Component={Proyectos_detail} permissions={['read_proyectos']} /> },
                    { path: 'proyectos/update/:id', element: <Page Component={Proyectos_form} permissions={['update_proyectos']} /> },
                    { path: 'proyectos/delete/:id', element: <Page Component={Proyectos_delete} permissions={['delete_proyectos']} /> },

                    // Matches
                    { path: 'matches/list', element: <Page Component={Matches_list} permissions={['read_matches']} /> },
                    { path: 'matches/report', element: <Page Component={Matches_report} permissions={['report_matches']} /> },
                    { path: 'matches/create', element: <Page Component={Matches_form} permissions={['create_matches']} /> },
                    { path: 'matches/detail/:id', element: <Page Component={Matches_detail} permissions={['read_matches']} /> },
                    { path: 'matches/update/:id', element: <Page Component={Matches_form} permissions={['update_matches']} /> },
                    { path: 'matches/delete/:id', element: <Page Component={Matches_delete} permissions={['delete_matches']} /> },

                    // Mensajes
                    { path: 'mensajes/list', element: <Page Component={Mensajes_list} permissions={['read_mensajes']} /> },
                    { path: 'mensajes/report', element: <Page Component={Mensajes_report} permissions={['report_mensajes']} /> },
                    { path: 'mensajes/create', element: <Page Component={Mensajes_form} permissions={['create_mensajes']} /> },
                    { path: 'mensajes/detail/:id', element: <Page Component={Mensajes_detail} permissions={['read_mensajes']} /> },
                    { path: 'mensajes/update/:id', element: <Page Component={Mensajes_form} permissions={['update_mensajes']} /> },
                    { path: 'mensajes/delete/:id', element: <Page Component={Mensajes_delete} permissions={['delete_mensajes']} /> },

                ]
            }
        ]
    }
];

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            ...publicRoutes,
            ...privateRoutes,
            { path: "*", element: <Suspense fallback={<Loading />}><NotFound /></Suspense> }
        ]
    }
]);

export default router;
