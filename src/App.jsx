// react-router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

// action
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";

// pages
import { Home, About, Register, Login } from "./pages";

// redux
import { useSelector } from "react-redux";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  const { user } = useSelector((state) => state.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
