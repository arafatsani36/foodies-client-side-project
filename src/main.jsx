import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { RouterProvider } from 'react-router-dom';
// import router from './routes/Routers';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './Page/Home/Home';
import AuthProvider from './Providers/AuthProviders';
import SingleChefRecipe from './layouts/SingleChefRecipe';
import SingleChef from './Page/SingleChef/SingleChef/SingleChef';
import Login from './Page/Login/Login/Login';
import LoginLayout from './layouts/LoginLayout';
import RegisterLayout from './layouts/RegisterLayout';
import Register from './Page/Login/register/Register';
import Error from './Page/Error/Error';
import PrivateRoute from './PrivateRoute';



const router = createBrowserRouter([
{
  path: '/login',
  element:<LoginLayout></LoginLayout>,
  children: [
    {
      path: '/login',
      element:<Login></Login>
    }
  ]
},

{
  path: '/register',
  element: <RegisterLayout></RegisterLayout>,
  children:[
    {
      path: "/register",
      element:<Register></Register>
    }
  ]
  
  
},


  {
    path: '/',
    element: <Main></Main>,

    children: [
      
        {
          path: '/',
          element: <Home></Home>
        },
        
      
    ]
  },

 {
    path : "singlechef",
     element: <SingleChefRecipe></SingleChefRecipe>,
     children: [
      {
         path: ':id',
         element: <PrivateRoute><SingleChef></SingleChef></PrivateRoute>,
         loader: ({params}) => fetch(`https://foodies-server-side.vercel.app/allchef/${params.id}`)
        
        }
     ]
   }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /> </AuthProvider>
  </React.StrictMode>,
)
