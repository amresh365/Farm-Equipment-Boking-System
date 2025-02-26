import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/eqipment/:id", element: <EquipmetDetails /> },
  { path: "/login", element: <LogInComponent /> },
  { path: "/login/register", element: <RegisterComponent /> },
  { errorElement: <div>Oops, an error occurred!</div> }, // Changed from <errorElement />
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
