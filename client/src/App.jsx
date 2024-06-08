import HomePage from "./routes/homePage/HomePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage"
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/loginPage/LoginPage"
import Register from "./routes/registerPage/register"
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <HomePage />,
        },
        {
          path:"/list",
          element: <ListPage />,
        },
        {
          path:"/:id",
          element: <SinglePage />,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth/>,
      children: [
        {
          path:"/profile",
          element: <ProfilePage />,
        },
        {
          path:"/profile/update",
          element: <ProfileUpdatePage />,
        },
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App