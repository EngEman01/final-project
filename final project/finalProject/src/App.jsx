import About from "./components/About/About";
import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Trees from "./components/Trees/Trees";
import ContactUs from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";
import TreePage from "./components/Trees/TreePage";

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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
