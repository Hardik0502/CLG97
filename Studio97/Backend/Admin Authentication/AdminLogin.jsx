import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";


export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setMounted(true), 50);
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000)

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/Studio97.Backend.admin97", { replace: true });
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0a0a",
            fontFamily: "'DM Sans', sans-serif",
            overflow: "hidden",
            position: "relative",
        }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ambient-1 {
          position: absolute;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%);
          top: -150px; right: -150px;
          border-radius: 50%;
          animation: drift1 8s ease-in-out infinite alternate;
        }
        .ambient-2 {
          position: absolute;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%);
          bottom: -100px; left: -100px;
          border-radius: 50%;
          animation: drift2 10s ease-in-out infinite alternate;
        }
        @keyframes drift1 { from { transform: translate(0,0); } to { transform: translate(-30px, 30px); } }
        @keyframes drift2 { from { transform: translate(0,0); } to { transform: translate(30px, -20px); } }

        .card {
          position: relative;
          background: #111111;
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 2px;
          padding: 52px 48px;
          width: 420px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 40px 80px rgba(0,0,0,0.6);
        }
        .card.visible { opacity: 1; transform: translateY(0); }

        .corner {
          position: absolute;
          width: 16px; height: 16px;
        }
        .corner-tl { top: -1px; left: -1px; border-top: 1px solid #d4af37; border-left: 1px solid #d4af37; }
        .corner-tr { top: -1px; right: -1px; border-top: 1px solid #d4af37; border-right: 1px solid #d4af37; }
        .corner-bl { bottom: -1px; left: -1px; border-bottom: 1px solid #d4af37; border-left: 1px solid #d4af37; }
        .corner-br { bottom: -1px; right: -1px; border-bottom: 1px solid #d4af37; border-right: 1px solid #d4af37; }

        .logo-line {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .logo-line.visible { opacity: 1; transform: translateY(0); }

        .logo-mark {
          width: 36px; height: 36px;
          border: 1px solid rgba(212,175,55,0.6);
          border-radius: 1px;
          display: flex;
          justify-content: center;
          flex-shrink: 0;
        }
        .logo-mark span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: #d4af37;
          letter-spacing: -0.5px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .logo-name {
          font-family: 'font2';
          font-size: 19px;
          font-weight: 300;
          color: #f5f0e8;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .logo-sub {
          font-size: 10px;
          font-weight: 400;
          color: rgba(212,175,55,0.7);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent);
          margin-bottom: 36px;
          opacity: 0;
          transition: opacity 0.6s ease 0.3s;
        }
        .divider.visible { opacity: 1; }

        .field-group {
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(8px);
        }
        .field-group.visible { opacity: 1; transform: translateY(0); }
        .field-group:nth-child(1) { transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s; }
        .field-group:nth-child(2) { transition: opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s; }

        .field-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 10px;
          transition: color 0.2s ease;
        }
        .field-group.active .field-label { color: rgba(212,175,55,0.8); }

        .field-wrap {
          position: relative;
        }
        .field-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1px;
          padding: 14px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #f0ece4;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          letter-spacing: 0.02em;
        }
        .field-input::placeholder { color: rgba(255,255,255,0.18); }
        .field-input:focus {
          border-color: rgba(212,175,55,0.4);
          background: rgba(212,175,55,0.03);
        }
        .field-line {
          position: absolute;
          bottom: 0; left: 50%;
          height: 1px;
          background: #d4af37;
          width: 0%;
          transform: translateX(-50%);
          transition: width 0.3s ease;
          border-radius: 0;
        }
        .field-group.active .field-line { width: 100%; }

        .toggle-btn {
          position: absolute;
          right: 14px; top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: rgba(255,255,255,0.25);
          transition: color 0.2s;
          display: flex; align-items: center;
        }
        .toggle-btn:hover { color: rgba(212,175,55,0.7); }

        .submit-btn {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.5);
          border-radius: 1px;
          color: #d4af37;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 15px;
          cursor: pointer;
          margin-top: 32px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, color 0.2s;
          opacity: 0;
          transform: translateY(8px);
        }
        .submit-btn.visible { opacity: 1; transform: translateY(0); transition: border-color 0.2s, color 0.2s, opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s; }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(212,175,55,0.08);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .submit-btn:hover::before { transform: scaleX(1); }
        .submit-btn:hover { border-color: rgba(212,175,55,0.8); color: #e8c84a; }

        .spinner {
          display: inline-block;
          width: 12px; height: 12px;
          border: 1px solid rgba(212,175,55,0.3);
          border-top-color: #d4af37;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-right: 8px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .footer-text {
          text-align: center;
          margin-top: 28px;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
          opacity: 0;
          transition: opacity 0.6s ease 0.65s;
        }
        .footer-text.visible { opacity: 1; }
        .footer-text a {
          color: rgba(212,175,55,0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-text a:hover { color: rgba(212,175,55,0.9); }
      `}</style>

            <div className="ambient-1" />
            <div className="ambient-2" />

            <div className={`card ${mounted ? "visible" : ""}`}>
                <div className="corner corner-tl" />
                <div className="corner corner-tr" />
                <div className="corner corner-bl" />
                <div className="corner corner-br" />

                <div className={`logo-line ${mounted ? "visible" : ""}`}>
                    <div className="logo-mark"><span>97</span></div>
                    <div className="logo-text">
                        <span className="logo-name ">Studio 97</span>
                        <span className="logo-sub">Admin Portal</span>
                    </div>
                </div>

                <div className={`divider ${mounted ? "visible" : ""}`} />

                <form onSubmit={handleLogin}>
                    <div className={`field-group ${focused === "email" ? "active" : ""} ${mounted ? "visible" : ""}`}>
                        <label className="field-label">Email Address</label>
                        <div className="field-wrap">
                            <input
                                className="field-input"
                                type="email"
                                placeholder="you@studio97.com"
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="field-line" />
                        </div>
                    </div>

                    <div className={`field-group ${focused === "password" ? "active" : ""} ${mounted ? "visible" : ""}`}>
                        <label className="field-label">Password</label>
                        <div className="field-wrap">
                            <input
                                className="field-input"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                style={{ paddingRight: "44px" }}
                                onFocus={() => setFocused("password")}
                                onBlur={() => setFocused(null)}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="field-line" />
                            <button
                                type="button"
                                className="toggle-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                                        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className={`submit-btn ${mounted ? "visible" : ""}`}>
                        {loading ? (
                            <><span className="spinner" />Authenticating</>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                <p className={`footer-text ${mounted ? "visible" : ""}`}>
                    Forgot your credentials? <a href="#">Contact support</a>
                </p>
            </div>
        </div>

    );
}