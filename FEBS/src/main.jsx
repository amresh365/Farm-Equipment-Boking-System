import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App.jsx";
import EquipmentDetailsScreen from "./screen/EquipmentDetailsScreen.jsx";
import EquipmentListScreen from "./screen/EquipmentListScreen.jsx";
import LoginScreen from "./screen/LoginScreen.jsx";
import RegisterComponent from "./screen/SighnupScreen.jsx";
import HowItWork from "./screen/HowItWork.jsx";
import BookingScreen from "./screen/BookingScreen.jsx";
import OwnerProfileScreen from "./screen/OwnerProfileScreen.jsx";
import FarmerProfileScreen from "./screen/FarmerProfileScreen.jsx";

const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/equipment/:id", element: <EquipmentDetailsScreen /> },
  { path: "/equipment", element: <EquipmentListScreen /> },
  { path: "/login", element: <LoginScreen /> },
  { path: "/register", element: <RegisterComponent /> },
  { path: "/howItWork", element: <HowItWork /> },
  { path: "/equipment/book", element: <BookingScreen /> },
  { path: "/profile/user", element: <FarmerProfileScreen /> },
  { path: "/profile/owner", element: <OwnerProfileScreen /> },

  { errorElement: <div>Oops, an error occurred!</div> }, // Changed from <errorElement />
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
