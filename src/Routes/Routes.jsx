import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:"/addToy",
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: "/allToys",
          element: <AllToys></AllToys>
        },
        {
          path: "/myToys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: "/updateToy/:id",
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://tiny-car-paradise-server.vercel.app/mycars/${params.id}`)
        },
        {
          path: "/toyDetails/:id",
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://tiny-car-paradise-server.vercel.app/mycars/${params.id}`)
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;