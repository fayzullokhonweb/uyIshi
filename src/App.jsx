// react-router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// react
import { useEffect } from "react";

// layout
import MainLayout from "./layout/MainLayout";

// action
import { action as LoginAction } from "./pages/Login";
import { action as HomeAction } from "./pages/Home";
import { action as RegisterAction } from "./pages/Register";

// pages
import { Home, About, Register, Login, ResetPassword } from "./pages";

// components
import { ProtectedRoutes } from "./components/ProtectedRoutes";

// redux
import { useSelector, useDispatch } from "react-redux";
import { isAuthChange } from "./app/userSlice";

// firebase

function App() {
  const dispatch = useDispatch();
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
          action: HomeAction,
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
    {
      path: "/reset",
      element: user ? <Navigate to="/" /> : <ResetPassword />,
    },
  ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     dispatch(login(user));
  //     dispatch(isAuthChange());
  //   });
  // }, []);

  return <> {isAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
