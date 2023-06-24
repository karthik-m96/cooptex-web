import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import ContactUs from "./pages/Contact/ContactUs"
import Shipping from "./pages/Shipping/Shipping";
import Privacy from "./pages/Privacy/Privacy";
import "./App.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/products/:id",
      element: <Products />
    },
    {
      path: "/product/:id",
      element: <Product />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/contactus",
      element: <ContactUs />
    },
    {
      path: "/shipping",
      element: <Shipping />
    },
    {
      path: "/privacy",
      element: <Privacy />
    }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
