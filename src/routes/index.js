import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import SignUp from "../pages/SignUp/SignUp";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import AllUser from "../pages/Alluser/AllUser";
import AllProducts from "../pages/AllProducts/AllProduct";
import CategoryProduct from "../pages/CategoryProduct/CategoryProduct";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import SearchProduct from "../pages/SearchProduct/SearchProduct";
import Payment from "../pages/Payment/Payment";
import Verify from "../pages/Verify/Verify";
import MyOrder from "../pages/MyOrder/MyOrder";
import DashBoard from "../pages/DashBoard/DashBoard";
import PageCalendar from "../pages/Calendar/PageCalendar";
import Myteam from "../pages/Myteam/Myteam";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: '/product-category',
        element: <CategoryProduct />
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "payment",
        element: <Payment />
      },
      {
        path: "search",
        element: <SearchProduct />
      },
      {
        path: "verify",
        element: <Verify />
      },
      {
        path: "myorder",
        element: <MyOrder />
      },
      {
        path: "/admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: 'all-users',
            element: <AllUser />
          },
          {
            path: 'all-products',
            element: <AllProducts />
          },
          {
            path: 'dashboard',
            element: <DashBoard />
          },
          {
            path: 'calendar',
            element: <PageCalendar />
          },
        ]
      },
    ]
  },
  {
    path: '/myteam',
    element: <Myteam />
  },
])