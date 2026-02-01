import { useState } from "react";
import "./SideBar.css"
function SideBar({ ActivePage, setActivePage, handelLogout }) {
    const nav_item = [
        { id: 1, label: "الرئيسية" },
        { id: 2, label: "العطور" },
        { id: 3, label: "آراء المستخدمين" },
        { id: 4, label: "أفضل العطور" }];

    const [dark, setDark] = useState(false);
    const toggleTheme = () => {
        document.body.classList.toggle("dark")
        setDark(!dark);
    }

    return (
        <aside className="sideBar">
            <div className="sideBar-header">

                <div className="brand">
                    <h1 className="hover-move">perfume</h1>

                    <button onClick={toggleTheme} className="theme-btn hover-move">
                        {dark ? "☀️" : "🌙"}
                    </button>
                </div>

                <h3 className="hover-move">لوحة التحكم</h3>
            </div>


            <nav className="sideBar-nav">
                <ul className="nav-list">
                    {nav_item.map((item) =>
                        <li className={ActivePage === item.label ? "nav-item-active" : "nav-item"}
                            key={item.id}
                            onClick={() => setActivePage(item.label)}
                        >{item.label}</li>
                    )}
                </ul>
            </nav>

            <button className="logout-btn" onClick={handelLogout}>تسجيل الخروج</button>
        </aside>
    )
}

export default SideBar;