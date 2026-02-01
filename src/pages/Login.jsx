import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin }) {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    const handelLogin = (e) => {
        e.preventDefault();
        if (email === "admin@hashplus" && password === "12345678") {
            setIsLogin(true);
            navigate("/DashboardLayout");
        }
        else {
            setErr("كلمة السر او الايميل غير صحيحة")

        }
    }


    return (
        <div className="login-page">
            <div className="login-wrapper">

                <div className="login-title">
                    <h1>مرحبا بك في وحدة التحكم</h1>
                    <h3>إدارة عطورك تبدأ من هنا...</h3>
                </div>

                <div className="login-card">
                    <h1>تسجيل الدخول</h1>
                    <form onSubmit={handelLogin}>
                        <div className="form-group">
                            <label>الايميل</label>
                            <input className="hover-move" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ادخل بريدك الالكتروني" />
                        </div>

                        <div className="form-group">
                            <label>كلمة السر</label>
                            <input className="hover-move" type="password" value={password} onChange={(e) => SetPassword(e.target.value)} placeholder="ادخل رمزك السري" />
                        </div>

                        {err && <p className="error-message">{err}</p>}

                        <button type="submit" className="login-btn hover-move">تسجيل الدخول</button>
                    </form>

                </div>
            </div>
        </div>


    )
}

export default Login;