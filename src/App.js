import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/home/Home";
import Login from "./component/login/Login";
import Sidebar from "./component/sidebar/Sidebar";
import User from "./pages/user/User";
import MyPost from "./pages/myPost/MyPost";
import AddNew from "./pages/addNew/AddNew";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";
import Stats from "./pages/stats/Stats";
import Order from "./pages/order/Order";
import Earning from "./pages/earning/Earning";
import MyBalance from "./pages/myBalance/MyBalance";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/myPost" element={<MyPost />} />
            <Route exact path="/addNew" element={<AddNew />} />
            <Route exact path="/stats" element={<Stats />} />
            <Route exact path="/notification" element={<Notification />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/earning" element={<Earning />} />
            <Route exact path="/my-balance" element={<MyBalance />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
