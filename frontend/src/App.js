import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Application/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./Components/Redux/Slices/UserSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const userLocalData = JSON.parse(localStorage.getItem("Converter - userData"));

    if (userLocalData) {
      dispatch(login(userLocalData));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <div className="text-gray-700">
      <BrowserRouter>
        <Routes>
          {!user.logged ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
