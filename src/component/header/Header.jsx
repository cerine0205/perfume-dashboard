import "./Header.css";

function Header({activePage, onToggleSideBar}) {
    return (
        <header className="header" dir="rtl">
            <div className="header-inner">

                <div className="header-right">
                    <button className="menu-btn hover-move" onClick={onToggleSideBar}>≡</button>
                    <h1 className="hover-move">{activePage}</h1>            
                </div>

                <div className="header-left">
                    <div className="header-search hover-move">
<input type="text" placeholder="بحث..." />
<button className="notification-btn">🔔</button>
                    </div>

                    <div className="admin-info hover-move">
                        <div className="admin-text">
                            <h2>سيرين الجحدلي</h2>
                            <h3>مدير النظام</h3>
                        </div>
                        <div className="admin-logo">س</div>

                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header;