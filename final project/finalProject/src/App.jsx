import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";

const combinedRoutes = createBrowserRouter([...userRoutes, ...adminRoutes]);

function App() {
  return (
    <>
      {/* <RouterProvider router={routes}></RouterProvider> */}
      <RouterProvider router={combinedRoutes}></RouterProvider>
    </>
  );
}

export default App;