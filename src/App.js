import logo from "./logo.svg";
import "./App.css";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home"; 
import { Router, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/cart" element={<Cart />} />
      
    </Routes>
  );
}

export default App;
