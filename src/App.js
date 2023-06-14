import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import DashBoard from "./component/DashBoard";
import Register from "./component/Register";
import Otp from "./component/Otp";
import CreatUrl from "./component/CreatUrl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/otp" element={<Otp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/creaturl" element={<CreatUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
