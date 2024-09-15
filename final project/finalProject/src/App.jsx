import About from "./components/About/About"
import './App.css'
import Home from "./components/Home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Trees from "./components/Trees/Trees";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
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
        element: <Trees/>,
      }
      // {
      //   path: "/contact",
      //   element: <Contact />
      // }
    ],
  },
]);

function App() {

  return (
    <>
    {/* <Navbar/>
    <About/>
    <Home/>
    <Footer/> */}
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
