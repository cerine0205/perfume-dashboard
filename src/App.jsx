import DashboardLayout from "./Layout/DashboardLayout";
import { HashRouter, Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";

function App(){
    const [isLogin,setIsLogin] = useState(false);
    return(
        <div>
            <HashRouter >
            <Routes>
                <Route element={<Login setIsLogin={setIsLogin}/>} path={"/Login"}></Route>
                <Route element={isLogin?<DashboardLayout />:<Navigate to="/Login"/>} path={"/DashboardLayout"}></Route>
                <Route element={<Navigate to="/Login"/>} path={"*"}></Route>

            </Routes>
            
            </HashRouter>

        </div>
    )
}

export default App;