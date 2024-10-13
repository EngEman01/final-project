import AdminProfile from "../components/Profiles/AdminProfile/AdminProfile";
import AdminDashboard from "../components/Profiles/AdminProfile/AdminDashboard";
import UpdateTrees from "../components/Profiles/AdminProfile/UpdateTrees";
import KnowUsers from "../components/Profiles/AdminProfile/KnowUsers";
import Orders from "../components/Profiles/AdminProfile/Orders";
import EditTree from "../components/Profiles/AdminProfile/EditTree/EditTree";
import AddTree from "../components/Profiles/AdminProfile/AddTree/AddTree";
import Logout from "../components/Profiles/Logout";
import "../App.css";
import AdminLogin from "../components/Profiles/AdminProfile/AdminLogin/AdminLogin";
const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/profile",
    element: <AdminProfile />,
    children: [
      {
        path: "/admin/profile/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/profile/updateTrees",
        element: <UpdateTrees />,
      },
      {
        path: "/admin/profile/informationUser",
        element: <KnowUsers />,
      },
      {
        path: "/admin/profile/orders",
        element: <Orders />,
      },
      {
        path: "/admin/profile/editTree/:id",
        element: <EditTree />,
      },
      {
        path: "/admin/profile/addTree",
        element: <AddTree />,
      },
      {
        path: "/admin/profile/logout",
        element: <Logout />,
      },
    ],
  },
];

export default adminRoutes;