import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import About from "../pages/UserPages/About";
import Home from "../pages/UserPages/Home";

export const routes = [
    {
        path:'/',
        element: <Home />,
        protected:false,
    },
    {
        path:'/register',
        element: <Signup />,
        protected:false,
    },
    {
        path:'/login',
        element: <Login />,
        protected:false,
    },
//     {
//     path: '/dashboard',
//     element: <Dashboard />,
//     protected: true,
//     redirectTo: ROUTES.LOGIN,
//   },
{
    path:'/about',
    element:<About />,
    protected:false,
}
]