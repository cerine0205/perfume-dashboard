import Header from "../component/header/Header";
import SideBar from "../component/sideBar/SideBar";
import MainContent from "../component/MainContent/MainContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardLayout(){
  const [showSideBar,setShowSideBar] = useState(true);
  const [activePage ,setActivePage] =useState("الرئيسية");
  const navigate = useNavigate();

  // داله لاخفاء واظهار السايدبار
  const onToggleSideBar = ()=>{
    setShowSideBar(!showSideBar);
  }

  const handelLogout= ()=>{
    navigate("/Login");
  }

 

  
  return(

    
       <div className="dashboard-layout">
        {showSideBar &&
  <SideBar ActivePage={activePage} setActivePage={setActivePage} handelLogout={handelLogout}/>}

  <div className="dashboard-main">
    <Header activePage={activePage} onToggleSideBar={onToggleSideBar} />
    <div className="dashboard-content">
      <MainContent activePage ={activePage}/>
    </div>
  </div>
</div>
    )
}

export default DashboardLayout;