import About from "./components/About/About";
import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Trees from "./components/Trees/Trees";
import ContactUs from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";
import TreePage from "./components/Trees/TreePage";
import UserProfile from "./components/Profiles/UsersProfiles/UserProfile";
import UserCart from "./components/Profiles/UsersProfiles/UserCart";
import UserInfo from "./components/Profiles/UsersProfiles/UserInfo";
import AdminProfile from "./components/Profiles/AdminProfile/AdminProfile"
import AdminDashboard from "./components/Profiles/AdminProfile/AdminDashboard";
import UpdateTrees from "./components/Profiles/AdminProfile/UpdateTrees";
import KnowUsers from "./components/Profiles/AdminProfile/KnowUsers";
import Orders from "./components/Profiles/AdminProfile/Orders";
import EditTree from "./components/Profiles/AdminProfile/EditTree/EditTree";
import AddTree from "./components/Profiles/AdminProfile/AddTree/AddTree";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>ERROR!!!!</h1>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/trees",
        element: <Trees />,
      },
      {
        path: "/trees/:id",
        element: <TreePage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/user",
        element: <UserProfile />,
        children: [
          {
            path: "",
            element: <UserInfo/>,
          },
          {
            path: "/user/cart",
            element: <UserCart/>,
          },
          {
            path: "/user/logout",
            element: <Logout/>,
          },
        ],
      },
      {
        path: "/admin", 
        element: <AdminProfile/>,
        children: [
          {
            path: "",
            element: <AdminDashboard/>,
          },
          {
            path: "/admin/updateTrees",
            element: <UpdateTrees/>,
          },
          {
            path: "/admin/informationUser",
            element: <KnowUsers/>,
          },
          {
            path: "/admin/orders",
            element: <Orders/>,
          },
          {
            path: "/admin/editTree/:id", 
            element: <EditTree />,
          },
          {
             path: "/admin/addTree",
             element: <AddTree /> 
          },
          {
            path: "/admin/logout",
            element: <Logout/>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>

      {/* <UserProfile/> */}
    </>
  );
}

export default App;
