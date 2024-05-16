import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About.tsx";
import Delivery from "./pages/Delivery.tsx";
import Promotions from "./pages/Promotions.tsx";
import Contacts from "./pages/Contacts.tsx";

import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="/wishlist" element={<ProtectedRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
      <Cart />
      <LoginModal />
    </Provider>
  );
}

export default App;
