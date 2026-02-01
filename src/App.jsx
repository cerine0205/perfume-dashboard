import DashboardLayout from "./Layout/DashboardLayout";
import { BrowserRouter, Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";

function App(){
    const [isLogin,setIsLogin] = useState(false);
    return(
        <div>
            <BrowserRouter >
            <Routes>
                <Route element={<Login setIsLogin={setIsLogin}/>} path={"/Login"}></Route>
                <Route element={isLogin?<DashboardLayout />:<Navigate to="/Login"/>} path={"/DashboardLayout"}></Route>
                <Route element={<Navigate to="/Login"/>} path={"*"}></Route>

            </Routes>
            
            </BrowserRouter>

        </div>
    )
}

export default App;