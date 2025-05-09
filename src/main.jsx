import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import App from "./App";
import { ProductDetail } from "./components/ProductDetail";
import { Message } from "./components/Message";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "shop",
//         element: <Shop />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="shop/product/:productid" element={<ProductDetail />}></Route>
      <Route path="message" element={<Message />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
