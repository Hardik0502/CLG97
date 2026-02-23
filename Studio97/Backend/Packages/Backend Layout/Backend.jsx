import { useState, useEffect, useMemo, useCallback } from "react";
import { collection, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../Firebase'


/* ─────────────────────────────────────────────
   GLOBAL CSS
───────────────────────────────────────────── */
const GCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html,body,#root{height:100%;background:#f7f8fc}
  body{overflow:hidden;font-family:'DM Sans',sans-serif}
  ::-webkit-scrollbar{width:5px;height:5px}
  ::-webkit-scrollbar-track{background:#f0f1f5}
  ::-webkit-scrollbar-thumb{background:#d0d3de;border-radius:4px}
  ::-webkit-scrollbar-thumb:hover{background:#1a1a2e}
  input,select,textarea{font-family:'DM Sans',sans-serif}
  input::placeholder{color:#a0a3b1}
  input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;opacity:.6}
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}
  select option{background:#fff;color:#1a1a2e}
  @keyframes fadeUp  {from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn  {from{opacity:0}to{opacity:1}}
  @keyframes toastIn {from{opacity:0;transform:translateY(-10px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
  @keyframes blink   {0%,100%{opacity:1}50%{opacity:.2}}
  @keyframes spin    {to{transform:rotate(360deg)}}
  .fu{animation:fadeUp .4s ease both}
  .fi{animation:fadeIn .3s ease both}
  .row-h:hover{background:#f7f8fc!important}
  .card{background:#fff;border:1px solid #e8eaf2;border-radius:14px}
  .card-hover:hover{border-color:#c8cce0!important;transform:translateY(-1px);box-shadow:0 4px 16px rgba(0,0,0,.07)}
  .btn-dark{background:#1a1a2e;color:#fff;border:none;border-radius:9px;padding:9px 20px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .18s;display:inline-flex;align-items:center;gap:6px}
  .btn-dark:hover{background:#2d2d4a;transform:translateY(-1px);box-shadow:0 4px 12px rgba(26,26,46,.2)}
  .btn-dark:active{transform:translateY(0)}
  .btn-outline{border:1.5px solid #d0d3de;background:#fff;color:#3d3f52;border-radius:9px;padding:8px 16px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .18s;display:inline-flex;align-items:center;gap:6px}
  .btn-outline:hover{border-color:#1a1a2e;color:#1a1a2e;background:#f7f8fc}
  .btn-green{background:#e8faf2;color:#15803d;border:1.5px solid #bbf0d4;border-radius:9px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .18s}
  .btn-green:hover{background:#dcf8ec;border-color:#86efac}
  .btn-red{background:#fef2f2;color:#dc2626;border:1.5px solid #fecaca;border-radius:9px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .18s}
  .btn-red:hover{background:#fee2e2;border-color:#f87171}
  .btn-amber{background:#fffbeb;color:#d97706;border:1.5px solid #fde68a;border-radius:9px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .18s}
  .btn-amber:hover{background:#fef3c7;border-color:#fcd34d}
  .btn-blue{background:#eff6ff;color:#1d4ed8;border:1.5px solid #bfdbfe;border-radius:9px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .18s}
  .btn-blue:hover{background:#dbeafe;border-color:#93c5fd}
  .tag{display:inline-block;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:700;font-family:'DM Mono',monospace;letter-spacing:.04em;text-transform:uppercase}
  .input-base{width:100%;border:1.5px solid #e2e5f0;border-radius:9px;padding:9px 13px;font-size:13px;outline:none;background:#fff;color:#1a1a2e;transition:border .18s}
  .input-base:focus{border-color:#1a1a2e}
  .tbl-head{display:grid;padding:0 16px;height:40px;align-items:center;background:#f7f8fc;border-bottom:1.5px solid #e8eaf2}
  .tbl-row{display:grid;padding:0 16px;min-height:58px;align-items:center;border-bottom:1px solid #f0f2f8;transition:background .12s}
  .modal-bg{position:fixed;inset:0;background:rgba(20,20,40,.45);z-index:900;display:flex;align-items:center;justify-content:center;animation:fadeIn .2s}
  .s97-drawer{position:fixed;top:0;left:0;bottom:0;width:272px;background:#fff;border-right:1.5px solid #e8eaf2;box-shadow:8px 0 40px rgba(10,10,30,.14);display:flex;flex-direction:column;z-index:600;transform:translateX(-100%);transition:transform .28s cubic-bezier(.4,0,.2,1);overflow-y:auto}
  .s97-drawer.open{transform:translateX(0)}
  .s97-overlay{position:fixed;inset:0;background:rgba(10,10,30,.4);z-index:599;animation:fadeIn .2s ease both}
  .s97-nav-btn{display:flex;align-items:center;gap:12px;width:100%;padding:12px 16px;border:none;border-radius:10px;background:transparent;color:#6b6f82;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;cursor:pointer;text-align:left;transition:all .16s;margin-bottom:3px}
  .s97-nav-btn:hover{background:#f3f4f9;color:#1a1a2e}
  .s97-nav-btn.active{background:#1a1a2e;color:#fff;font-weight:600}
  .s97-ham{display:flex;flex-direction:column;gap:5px;width:20px}
  .s97-ham span{display:block;height:2px;border-radius:2px;background:#1a1a2e;transition:all .22s ease}
  @media(max-width:640px){
    .hide-xs{display:none!important}
    .tbl-scroll{overflow-x:auto}
    .tbl-inner{min-width:580px}
    .grid-auto{grid-template-columns:1fr!important}
  }
`;



/* ─────────────────────────────────────────────
   TOKENS
───────────────────────────────────────────── */
const T = {
  bg: "#f7f8fc", white: "#fff", border: "#e8eaf2",
  txt: "#1a1a2e", sub: "#6b6f82", muted: "#a0a3b1",
  navy: "#1a1a2e",
  green: "#15803d", greenBg: "#f0fdf4", greenBorder: "#bbf7d0",
  red: "#dc2626", redBg: "#fef2f2", redBorder: "#fecaca",
  amber: "#d97706", amberBg: "#fffbeb", amberBorder: "#fde68a",
  blue: "#1d4ed8", blueBg: "#eff6ff", blueBorder: "#bfdbfe",
  purple: "#7c3aed", purpleBg: "#f5f3ff", purpleBorder: "#ddd6fe",
};

/* ─────────────────────────────────────────────
   SEED DATA
───────────────────────────────────────────── */
const REJECT_REASONS = ["Date already booked", "Not available", "Not interested", "Budget mismatch", "Outside service area"];

const INIT_PENDING = [
  { id: "ORD-001", name: "Aryan Mehta", email: "aryan@gmail.com", phone: "9876543210", address: "Bandra West, Mumbai", pkg: "Silver", event: "Wedding", dateFrom: "2025-03-15", dateTo: "2025-03-16", price: 45000, reqDate: "2025-02-01" },
  { id: "ORD-002", name: "Sana Qureshi", email: "sana@outlook.com", phone: "9823456710", address: "Koregaon Park, Pune", pkg: "Gold", event: "Engagement", dateFrom: "2025-04-02", dateTo: "2025-04-02", price: 75000, reqDate: "2025-02-03" },
  { id: "ORD-003", name: "Karan Joshi", email: "karan@gmail.com", phone: "9556789012", address: "Jubilee Hills, Hyderabad", pkg: "Diamond", event: "Wedding", dateFrom: "2025-05-20", dateTo: "2025-05-21", price: 110000, reqDate: "2025-02-09" },
  { id: "ORD-004", name: "Rishi Gupta", email: "rishi@gmail.com", phone: "9390123456", address: "Salt Lake, Kolkata", pkg: "Silver", event: "Birthday", dateFrom: "2025-03-28", dateTo: "2025-03-28", price: 45000, reqDate: "2025-02-11" },
  { id: "ORD-005", name: "Farah Khan", email: "farah@icloud.com", phone: "9312345678", address: "Vasant Kunj, Delhi", pkg: "Gold", event: "Anniversary", dateFrom: "2025-04-10", dateTo: "2025-04-10", price: 75000, reqDate: "2025-02-12" },
];

const INIT_CLIENTS = [
  { id: "ORD-006", name: "Dev Rathore", email: "dev@yahoo.com", phone: "9712345670", address: "Indiranagar, Bangalore", pkg: "Gold", event: "Wedding", dateFrom: "2025-01-15", dateTo: "2025-01-16", price: 75000, reqDate: "2024-12-05", completedDate: "2025-01-16", payment: "full" },
  { id: "ORD-007", name: "Meera Pillai", email: "meera@rediff.com", phone: "9478901234", address: "Adyar, Chennai", pkg: "Silver", event: "Engagement", dateFrom: "2024-12-20", dateTo: "2024-12-20", price: 45000, reqDate: "2024-11-10", completedDate: "2024-12-21", payment: "advance" },
  { id: "ORD-008", name: "Zara Mirza", email: "zara@gmail.com", phone: "9134567890", address: "Satellite, Ahmedabad", pkg: "Diamond", event: "Wedding", dateFrom: "2025-01-30", dateTo: "2025-01-31", price: 110000, reqDate: "2024-12-20", completedDate: "2025-01-31", payment: "unpaid" },
];

const INIT_REJECTED = [
  { id: "ORD-009", name: "Priya Sharma", email: "priya@gmail.com", phone: "9634567890", address: "Powai, Mumbai", pkg: "Diamond", event: "Wedding", dateFrom: "2025-02-07", dateTo: "2025-02-08", price: 110000, reqDate: "2025-01-20", reason: "Date already booked" },
  { id: "ORD-010", name: "Aditya Singh", email: "aditya@gmail.com", phone: "9223456789", address: "Gomti Nagar, Lucknow", pkg: "Gold", event: "Anniversary", dateFrom: "2025-02-14", dateTo: "2025-02-14", price: 75000, reqDate: "2025-01-25", reason: "Not available" },
];

const INIT_PACKAGES = [
  {
    id: "P1", name: "Silver Package", price: 45000, color: "#64748b", tag: "silver", features: [
      { key: "cine", label: "Cinematographers", value: "1" },
      { key: "candid", label: "Candid Photographers", value: "2" },
      { key: "video", label: "Videographers", value: "1" },
      { key: "album", label: "Photo Album Pages", value: "100" },
      { key: "photos", label: "Edited Photos", value: "200" },
      { key: "reels", label: "Reels / Short Films", value: "1" },
      { key: "drone", label: "Drone Coverage", value: "No" },
      { key: "hl", label: "Highlight Video", value: "5 min" },
      { key: "del", label: "Delivery Time", value: "30 days" },
    ]
  },
  {
    id: "P2", name: "Gold Package", price: 75000, color: "#ca8a04", tag: "gold", features: [
      { key: "cine", label: "Cinematographers", value: "2" },
      { key: "candid", label: "Candid Photographers", value: "3" },
      { key: "video", label: "Videographers", value: "1" },
      { key: "album", label: "Photo Album Pages", value: "150" },
      { key: "photos", label: "Edited Photos", value: "400" },
      { key: "reels", label: "Reels / Short Films", value: "2" },
      { key: "drone", label: "Drone Coverage", value: "Yes (1 day)" },
      { key: "hl", label: "Highlight Video", value: "10 min" },
      { key: "del", label: "Delivery Time", value: "25 days" },
    ]
  },
  {
    id: "P3", name: "Diamond Package", price: 110000, color: "#0ea5e9", tag: "diamond", features: [
      { key: "cine", label: "Cinematographers", value: "2" },
      { key: "candid", label: "Candid Photographers", value: "3" },
      { key: "video", label: "Videographers", value: "2" },
      { key: "album", label: "Photo Album Pages", value: "200" },
      { key: "photos", label: "Edited Photos", value: "600" },
      { key: "reels", label: "Reels / Short Films", value: "3" },
      { key: "drone", label: "Drone Coverage", value: "Yes (full event)" },
      { key: "hl", label: "Highlight Video", value: "20 min" },
      { key: "del", label: "Delivery Time", value: "20 days" },
    ]
  },
];

const INIT_EVENTS = [
  { id: "EV-001", title: "Christmas Special", discount: 20, desc: "Flat 20% off on all packages", applies: "all", startDate: "2025-12-20", endDate: "2025-12-26", active: true, color: "#dc2626" },
  { id: "EV-002", title: "New Year Offer", discount: 15, desc: "Start the new year with a bang", applies: "all", startDate: "2026-01-01", endDate: "2026-01-05", active: true, color: "#7c3aed" },
  { id: "EV-003", title: "Valentine Special", discount: 10, desc: "Couples discount on Gold & Diamond", applies: "Gold,Diamond", startDate: "2026-02-10", endDate: "2026-02-14", active: false, color: "#db2777" },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
let _eid = 4;
const mkEvId = () => `EV-${String(_eid++).padStart(3, "0")}`;
const fmt = n => `₹${Number(n).toLocaleString("en-IN")}`;
const fmtD = d => d ? new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—";
const initials = s => s.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
const avBg = i => ["#e0e7ff", "#fce7f3", "#d1fae5", "#fef3c7", "#ffe4e6", "#e0f2fe"][i % 6];
const avTc = i => ["#4338ca", "#be185d", "#065f46", "#92400e", "#be123c", "#0369a1"][i % 6];
const pkgColor = p => p === "Diamond" ? "#0ea5e9" : p === "Gold" ? "#ca8a04" : "#64748b";

/* ─────────────────────────────────────────────
   SHARED UI
───────────────────────────────────────────── */
function Toast({ t }) {
  if (!t) return null;
  return (
    <div style={{ position: "fixed", top: 16, right: 16, zIndex: 9999, animation: "toastIn .28s ease", background: T.white, border: `1.5px solid ${t.border || T.border}`, borderRadius: 12, padding: "11px 18px", boxShadow: "0 8px 32px rgba(0,0,0,.1)", display: "flex", alignItems: "center", gap: 10, minWidth: 220 }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: t.dot, flexShrink: 0 }} />
      <span style={{ fontSize: 13, fontWeight: 600, color: T.txt }}>{t.msg}</span>
    </div>
  );
}

function Ava({ name, idx, size = 38 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0, background: avBg(idx), display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * .3, fontWeight: 700, color: avTc(idx) }}>
      {initials(name)}
    </div>
  );
}

function Modal({ onClose, children, wide = false }) {
  return (
    <div className="modal-bg" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="fi card" style={{ width: `min(${wide ? "680px" : "440px"},96vw)`, padding: 28, position: "relative", maxHeight: "92vh", overflowY: "auto" }}>
        <button onClick={onClose} className="btn-outline" style={{ position: "absolute", top: 14, right: 14, padding: "4px 10px", fontSize: 12 }}>✕</button>
        {children}
      </div>
    </div>
  );
}

function STitle({ title, sub }) {
  return (
    <div className="fu" style={{ marginBottom: 22 }}>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: T.txt, lineHeight: 1 }}>{title}</h1>
      {sub && <p style={{ fontSize: 13, color: T.sub, marginTop: 5 }}>{sub}</p>}
    </div>
  );
}

function StatCard({ label, value, icon, color, sub, delay = 0 }) {
  return (
    <div className="fu card" style={{ padding: "16px 18px", animationDelay: `${delay}s` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em" }}>{label}</span>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{icon}</div>
      </div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: T.txt, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: T.muted, marginTop: 3 }}>{sub}</div>}
    </div>
  );
}

/* Full-detail client card (used in View modal) */
function ClientDetailCard({ o, onClose }) {
  return (
    <>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: T.txt, marginBottom: 6 }}>Order Details</h2>
      <p style={{ fontSize: 12, color: T.muted, marginBottom: 20, fontFamily: "'DM Mono',monospace" }}>{o.id}</p>

      {/* Client info */}
      <div style={{ background: T.bg, borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 10 }}>Client Information</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[["Full Name", o.name], ["Email", o.email], ["Phone", o.phone], ["Location / Address", o.address]].map(([l, v]) => (
            <div key={l} style={{ background: T.white, borderRadius: 9, padding: "10px 12px", border: `1px solid ${T.border}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 3 }}>{l}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.txt }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Event info */}
      <div style={{ background: T.bg, borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 10 }}>Event & Booking</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            ["Event Type", o.event],
            ["Package", <span className="tag" style={{ background: pkgColor(o.pkg) + "20", color: pkgColor(o.pkg) }}>{o.pkg}</span>],
            ["From Date", fmtD(o.dateFrom)],
            ["To Date", fmtD(o.dateTo)],
            ["Requested On", fmtD(o.reqDate)],
            ["Package Price", <span style={{ fontFamily: "'DM Mono',monospace", fontWeight: 700, color: T.navy }}>{fmt(o.price)}</span>],
          ].map(([l, v]) => (
            <div key={l} style={{ background: T.white, borderRadius: 9, padding: "10px 12px", border: `1px solid ${T.border}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 3 }}>{l}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.txt }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {o.payment && (
        <div style={{ padding: "10px 14px", borderRadius: 10, background: o.payment === "full" ? T.greenBg : o.payment === "advance" ? T.amberBg : T.redBg, border: `1px solid ${o.payment === "full" ? T.greenBorder : o.payment === "advance" ? T.amberBorder : T.redBorder}`, display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 16 }}>{o.payment === "full" ? "✅" : o.payment === "advance" ? "💰" : "⏳"}</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: o.payment === "full" ? T.green : o.payment === "advance" ? T.amber : T.red }}>
              {o.payment === "full" ? "Full Payment Received" : o.payment === "advance" ? "Advance Payment Received" : "Payment Pending"}
            </div>
          </div>
        </div>
      )}

      {o.reason && (
        <div style={{ padding: "10px 14px", borderRadius: 10, background: T.redBg, border: `1px solid ${T.redBorder}`, marginBottom: 16 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: T.red, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 3 }}>Decline Reason</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.red }}>{o.reason}</div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   DECLINE MODAL (shared)
───────────────────────────────────────────── */
function DeclineModal({ order, onConfirm, onClose }) {
  const [reason, setReason] = useState("");
  const [custom, setCustom] = useState("");
  return (
    <Modal onClose={onClose}>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: T.txt, marginBottom: 4 }}>Decline Order</h2>
      <p style={{ fontSize: 13, color: T.sub, marginBottom: 18 }}>Select a reason for declining <strong>{order.name}</strong>'s order.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
        {REJECT_REASONS.map(r => (
          <label key={r} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 13px", borderRadius: 10, border: `1.5px solid ${reason === r ? T.navy : T.border}`, cursor: "pointer", transition: "all .14s", background: reason === r ? "#f0f2f8" : T.white }}>
            <input type="radio" name="reason" value={r} checked={reason === r} onChange={() => setReason(r)} style={{ accentColor: T.navy }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: T.txt }}>{r}</span>
          </label>
        ))}
        <label style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 13px", borderRadius: 10, border: `1.5px solid ${reason === "custom" ? T.navy : T.border}`, cursor: "pointer", background: reason === "custom" ? "#f0f2f8" : T.white }}>
          <input type="radio" name="reason" value="custom" checked={reason === "custom"} onChange={() => setReason("custom")} style={{ accentColor: T.navy }} />
          <span style={{ fontSize: 13, fontWeight: 500, color: T.txt }}>Other reason…</span>
        </label>
        {reason === "custom" && <input className="input-base" placeholder="Write reason…" value={custom} onChange={e => setCustom(e.target.value)} />}
      </div>
      <div style={{ display: "flex", gap: 9 }}>
        <button className="btn-dark" style={{ flex: 1, justifyContent: "center" }} onClick={() => { const r = reason === "custom" ? custom : reason; if (r.trim()) onConfirm(r); }}>Confirm Decline</button>
        <button className="btn-outline" onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
}

/* ═══════════════════════════════════════════
   PAGE: ORDER REQUESTS (Dashboard)
═══════════════════════════════════════════ */
function PageDashboard({ pending, setPending, clients, setClients, rejected, setRejected, fireToast }) {
  const [sort, setSort] = useState("newest");
  const [viewOrder, setViewOrder] = useState(null);
  const [declineTarget, setDeclineTarget] = useState(null);

  const sorted = useMemo(() => {
    const a = [...pending];
    if (sort === "newest") a.sort((x, y) => y.reqDate.localeCompare(x.reqDate));
    if (sort === "oldest") a.sort((x, y) => x.reqDate.localeCompare(y.reqDate));
    if (sort === "price_desc") a.sort((x, y) => y.price - x.price);
    if (sort === "price_asc") a.sort((x, y) => x.price - y.price);
    if (sort === "event_asc") a.sort((x, y) => x.dateFrom.localeCompare(y.dateFrom));
    if (sort === "event_desc") a.sort((x, y) => y.dateFrom.localeCompare(x.dateFrom));
    return a;
  }, [pending, sort]);

  const acceptOrder = o => {
    setPending(p => p.filter(x => x.id !== o.id));
    setClients(c => [{ ...o, completedDate: null, payment: "unpaid" }, ...c]);
    fireToast("Order accepted! Client added to Clients.", "#15803d", "#bbf7d0");
  };

  const confirmDecline = reason => {
    setPending(p => p.filter(x => x.id !== declineTarget.id));
    setRejected(r => [{ ...declineTarget, reason }, ...r]);
    fireToast("Order declined. Moved to Rejected Orders.", "#dc2626", "#fecaca");
    setDeclineTarget(null);
  };

  return (
    <div style={{ padding: "28px 28px 40px" }}>
      <STitle title="Order Requests" sub={`${pending.length} pending request${pending.length !== 1 ? "s" : ""} awaiting your decision`} />

      {/* Sort strip */}
      <div className="fu card" style={{ padding: "10px 14px", marginBottom: 16, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, animationDelay: ".06s" }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", flexShrink: 0 }}>Sort</span>
        {[["newest", "Newest First"], ["oldest", "Oldest First"], ["price_desc", "Price ↓"], ["price_asc", "Price ↑"], ["event_asc", "Event: Soon"], ["event_desc", "Event: Late"]].map(([v, l]) => (
          <button key={v} onClick={() => setSort(v)} style={{ padding: "5px 13px", borderRadius: 20, border: `1.5px solid ${sort === v ? T.navy : T.border}`, background: sort === v ? T.navy : T.white, color: sort === v ? "#fff" : T.sub, fontSize: 12, fontWeight: 500, cursor: "pointer", transition: "all .14s", whiteSpace: "nowrap" }}>{l}</button>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11, color: T.muted, fontFamily: "'DM Mono',monospace" }}>{sorted.length} order{sorted.length !== 1 ? "s" : ""}</span>
      </div>

      {sorted.length === 0 ? (
        <div className="fu card" style={{ padding: "60px 30px", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: T.txt, marginBottom: 6 }}>All caught up!</div>
          <div style={{ fontSize: 13, color: T.sub }}>No pending orders right now.</div>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 14 }}>
          {sorted.map((o, i) => (
            <div key={o.id} className="fu card card-hover" style={{ padding: 20, animationDelay: `${i * .04}s`, transition: "all .2s" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                {/* Left: avatar + info */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 220 }}>
                  <Ava name={o.name} idx={i} size={46} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: T.txt }}>{o.name}</div>
                    <div style={{ fontSize: 12, color: T.muted, fontFamily: "'DM Mono',monospace" }}>{o.email} · {o.phone}</div>
                    <div style={{ fontSize: 12, color: T.sub, marginTop: 2 }}>📍 {o.address}</div>
                  </div>
                </div>
                {/* Right: chips */}
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap", flexShrink: 0, alignItems: "center" }}>
                  <span className="tag" style={{ background: pkgColor(o.pkg) + "20", color: pkgColor(o.pkg) }}>{o.pkg}</span>
                  <span className="tag" style={{ background: T.blueBg, color: T.blue }}>{o.event}</span>
                </div>
              </div>

              {/* Details row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 8, margin: "14px 0" }}>
                {[
                  ["📅 Event Dates", `${fmtD(o.dateFrom)} → ${fmtD(o.dateTo)}`],
                  ["📬 Requested", fmtD(o.reqDate)],
                  ["💰 Package Price", fmt(o.price)],
                  ["📦 Package", o.pkg + " Package"],
                ].map(([l, v]) => (
                  <div key={l} style={{ background: T.bg, borderRadius: 9, padding: "9px 11px" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: T.muted, marginBottom: 2 }}>{l}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: T.txt }}>{v}</div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                <button className="btn-green" onClick={() => acceptOrder(o)}>Accept Order</button>
                <button className="btn-red" onClick={() => setDeclineTarget(o)}>Decline</button>
                <button className="btn-outline" style={{ marginLeft: "auto" }} onClick={() => setViewOrder(o)}>View Full Details</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View modal */}
      {viewOrder && (
        <Modal onClose={() => setViewOrder(null)} wide>
          <ClientDetailCard o={viewOrder} onClose={() => setViewOrder(null)} />
        </Modal>
      )}

      {/* Decline modal */}
      {declineTarget && (
        <DeclineModal order={declineTarget} onConfirm={confirmDecline} onClose={() => setDeclineTarget(null)} />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE: CLIENTS (accepted)
═══════════════════════════════════════════ */
function PageClients({ clients, setClients, rejected, setRejected, setPending, fireToast }) {
  const [view, setView] = useState("active");
  const [search, setSearch] = useState("");
  const [viewOrder, setView2] = useState(null);
  const [declineTarget, setDeclineT] = useState(null);
  const [editPayment, setEditPay] = useState(null);

  const active = clients.filter(c => !c.completedDate);
  const completed = clients.filter(c => !!c.completedDate);
  const list = (view === "active" ? active : completed).filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  const markComplete = c => {
    setClients(p => p.map(x => x.id === c.id ? { ...x, completedDate: new Date().toISOString().slice(0, 10) } : x));
    setView2(null);
    fireToast("Order marked as completed!", "#15803d", "#bbf7d0");
  };

  const confirmDecline = reason => {
    const order = declineTarget;
    setClients(p => p.filter(x => x.id !== order.id));
    setRejected(r => [{ ...order, reason }, ...r]);
    fireToast("Order moved to Rejected Orders.", "#dc2626", "#fecaca");
    setDeclineT(null);
    setView2(null);
  };

  const updatePayment = (id, payment) => {
    setClients(p => p.map(x => x.id === id ? { ...x, payment } : x));
    setEditPay(null);
    fireToast("Payment status updated.", "#1d4ed8", "#bfdbfe");
  };

  const payIcon = s => s === "full" ? "✅" : s === "advance" ? "💰" : "⏳";
  const payColor = s => s === "full" ? T.green : s === "advance" ? T.amber : T.red;
  const payLabel = s => s === "full" ? "Full Paid" : s === "advance" ? "Advance" : s === "unpaid" ? "Unpaid" : "—";

  return (
    <div style={{ padding: "28px 28px 40px" }}>
      <STitle title="Clients" sub="All accepted orders — active bookings and completed events" />

      {/* Toggle + search */}
      <div className="fu" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap", animationDelay: ".04s" }}>
        <div style={{ display: "flex", background: T.white, border: `1.5px solid ${T.border}`, borderRadius: 10, padding: 4, gap: 3 }}>
          {[["active", "Active Bookings", active.length], ["completed", "Completed Events", completed.length]].map(([v, l, cnt]) => (
            <button key={v} onClick={() => setView(v)} style={{ padding: "7px 15px", borderRadius: 7, border: "none", background: view === v ? T.navy : T.white, color: view === v ? "#fff" : T.sub, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .18s", display: "flex", alignItems: "center", gap: 7 }}>
              {l}
              <span style={{ padding: "1px 7px", borderRadius: 12, background: view === v ? "rgba(255,255,255,.2)" : "#f0f2f8", color: view === v ? "#fff" : T.muted, fontSize: 11 }}>{cnt}</span>
            </button>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 180, maxWidth: 300, display: "flex", alignItems: "center", gap: 8, border: `1.5px solid ${T.border}`, borderRadius: 9, padding: "7px 12px", background: T.white }}>
          <span style={{ color: T.muted }}>🔍</span>
          <input style={{ flex: 1, border: "none", outline: "none", fontSize: 13, color: T.txt, background: "transparent" }} placeholder="Search clients…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {list.length === 0 ? (
        <div className="fu card" style={{ padding: "60px 30px", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>{view === "active" ? "📅" : "🏆"}</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: T.txt, marginBottom: 6 }}>{view === "active" ? "No active bookings" : "No completed events yet"}</div>
          <div style={{ fontSize: 13, color: T.sub }}>{view === "active" ? "Accept orders from Order Requests page." : "Mark active bookings as complete."}</div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 14 }}>
          {list.map((c, i) => (
            <div key={c.id} className="fu card card-hover" style={{ padding: 20, transition: "all .2s", animationDelay: `${i * .05}s` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <Ava name={c.name} idx={i} size={44} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.txt, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: T.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.email}</div>
                </div>
                {!c.completedDate && <span style={{ width: 8, height: 8, borderRadius: "50%", background: T.green, flexShrink: 0, animation: "blink 2.5s infinite" }} />}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 12 }}>
                {[
                  ["Package", <span className="tag" style={{ background: pkgColor(c.pkg) + "20", color: pkgColor(c.pkg) }}>{c.pkg}</span>],
                  ["Event", c.event],
                  ["Dates", `${fmtD(c.dateFrom)} → ${fmtD(c.dateTo)}`],
                  ["Amount", <span style={{ fontFamily: "'DM Mono',monospace", fontWeight: 700, color: T.navy }}>{fmt(c.price)}</span>],
                ].map(([l, v]) => (
                  <div key={l} style={{ background: T.bg, borderRadius: 8, padding: "8px 10px" }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: T.muted, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 2 }}>{l}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: T.txt }}>{v}</div>
                  </div>
                ))}
              </div>

              {/* Payment status */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: 9, background: payColor(c.payment) + "14", border: `1px solid ${payColor(c.payment)}30`, marginBottom: 11 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 15 }}>{payIcon(c.payment)}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: payColor(c.payment) }}>{payLabel(c.payment)}</span>
                </div>
                <button className="btn-outline" style={{ padding: "3px 9px", fontSize: 11 }} onClick={() => setEditPay(c)}>Edit</button>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                <button className="btn-outline" style={{ fontSize: 12, padding: "6px 12px" }} onClick={() => setView2(c)}>View Details</button>
                {!c.completedDate && <button className="btn-dark" style={{ fontSize: 12, padding: "6px 12px" }} onClick={() => markComplete(c)}>Mark Complete</button>}
                <button className="btn-red" style={{ fontSize: 12, padding: "6px 12px" }} onClick={() => setDeclineT(c)}>Move to Rejected</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View modal */}
      {viewOrder && (
        <Modal onClose={() => setView2(null)} wide>
          <ClientDetailCard o={viewOrder} />
          <div style={{ display: "flex", gap: 9, marginTop: 16, flexWrap: "wrap" }}>
            {!viewOrder.completedDate && <button className="btn-dark" onClick={() => markComplete(viewOrder)}>Mark Complete</button>}
            <button className="btn-red" onClick={() => { setDeclineT(viewOrder); setView2(null); }}>Move to Rejected</button>
          </div>
        </Modal>
      )}

      {/* Decline modal */}
      {declineTarget && <DeclineModal order={declineTarget} onConfirm={confirmDecline} onClose={() => setDeclineT(null)} />}

      {/* Edit payment modal */}
      {editPayment && (
        <Modal onClose={() => setEditPay(null)}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: T.txt, marginBottom: 4 }}>Update Payment</h2>
          <p style={{ fontSize: 13, color: T.sub, marginBottom: 20 }}>Set payment status for <strong>{editPayment.name}</strong></p>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20 }}>
            {[["full", "Full Payment Received", "✅", T.green], ["advance", "Advance Payment Received", "💰", T.amber], ["unpaid", "Not Paid Yet", "⏳", T.red]].map(([v, l, ic, cl]) => (
              <button key={v} onClick={() => updatePayment(editPayment.id, v)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${editPayment.payment === v ? cl : T.border}`, background: editPayment.payment === v ? cl + "14" : T.white, cursor: "pointer", transition: "all .15s", textAlign: "left" }}>
                <span style={{ fontSize: 20 }}>{ic}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: T.txt }}>{l}</span>
              </button>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE: PAYMENTS
═══════════════════════════════════════════ */
function PagePayments({ clients, setClients, fireToast }) {
  const [editPay, setEditPay] = useState(null);

  const full = clients.filter(c => c.payment === "full");
  const advance = clients.filter(c => c.payment === "advance");
  const unpaid = clients.filter(c => c.payment === "unpaid" || !c.payment);

  const totalRevenue = full.reduce((s, c) => s + c.price, 0);
  const advanceAmt = advance.reduce((s, c) => s + (c.price * 0.5), 0); // assuming 50% advance
  const pendingAmt = unpaid.reduce((s, c) => s + c.price, 0) + advanceAmt;

  const updatePayment = (id, payment) => {
    setClients(p => p.map(x => x.id === id ? { ...x, payment } : x));
    setEditPay(null);
    fireToast("Payment status updated.", "#1d4ed8", "#bfdbfe");
  };

  const PaySection = ({ title, list, color, bg, border, icon, emptyMsg }) => (
    <div className="fu card" style={{ padding: 20 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: bg, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.txt }}>{title}</div>
            <div style={{ fontSize: 11, color: T.muted }}>{list.length} client{list.length !== 1 ? "s" : ""}</div>
          </div>
        </div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color }}>{list.length}</div>
      </div>
      {list.length === 0 ? (
        <div style={{ textAlign: "center", padding: "20px 0", color: T.muted, fontSize: 13 }}>{emptyMsg}</div>
      ) : list.map((c, i) => (
        <div key={c.id} className="row-h" style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 6px", borderBottom: i < list.length - 1 ? `1px solid ${T.border}` : "none", borderRadius: 7 }}>
          <Ava name={c.name} idx={i} size={34} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.txt, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</div>
            <div style={{ fontSize: 11, color: T.muted }}>{c.event} · {c.pkg}</div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, fontWeight: 700, color: T.navy }}>{fmt(c.price)}</div>
            <button className="btn-outline" style={{ padding: "2px 8px", fontSize: 10, marginTop: 3 }} onClick={() => setEditPay(c)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: "28px 28px 40px" }}>
      <STitle title="Payments" sub="Track advance, full, and pending payments from all accepted clients" />

      {/* Summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12, marginBottom: 22 }}>
        <StatCard label="Full Payments" value={full.length} icon="✅" color={T.green} delay={0} sub={fmt(totalRevenue) + " collected"} />
        <StatCard label="Advance Payments" value={advance.length} icon="💰" color={T.amber} delay={.07} sub="Remaining due on event day" />
        <StatCard label="Unpaid" value={unpaid.length} icon="⏳" color={T.red} delay={.14} sub={fmt(pendingAmt) + " outstanding"} />
        <StatCard label="Total Collected" value={fmt(totalRevenue + advanceAmt)} icon="💵" color={T.blue} delay={.21} sub="Full + advance received" />
      </div>

      {/* Three columns */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
        <PaySection title="Full Payment" list={full} color={T.green} bg={T.greenBg} border={T.greenBorder} icon="✅" emptyMsg="No full payments yet." />
        <PaySection title="Advance Paid" list={advance} color={T.amber} bg={T.amberBg} border={T.amberBorder} icon="💰" emptyMsg="No advance payments." />
        <PaySection title="Not Paid" list={unpaid} color={T.red} bg={T.redBg} border={T.redBorder} icon="⏳" emptyMsg="All clients have paid." />
      </div>

      {/* Edit payment modal */}
      {editPay && (
        <Modal onClose={() => setEditPay(null)}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: T.txt, marginBottom: 4 }}>Update Payment</h2>
          <p style={{ fontSize: 13, color: T.sub, marginBottom: 18 }}>Set payment status for <strong>{editPay.name}</strong> ({fmt(editPay.price)})</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 16 }}>
            {[["full", "Full Payment Received", "✅", T.green], ["advance", "Advance Payment Received", "💰", T.amber], ["unpaid", "Not Paid Yet", "⏳", T.red]].map(([v, l, ic, cl]) => (
              <button key={v} onClick={() => updatePayment(editPay.id, v)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${editPay.payment === v ? cl : T.border}`, background: editPay.payment === v ? cl + "14" : T.white, cursor: "pointer", transition: "all .15s" }}>
                <span style={{ fontSize: 20 }}>{ic}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: T.txt }}>{l}</span>
              </button>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE: REJECTED ORDERS
═══════════════════════════════════════════ */
function PageRejected({ rejected, setRejected, clients, setClients, setPending, fireToast }) {
  const [viewOrder, setViewOrder] = useState(null);
  const [restoreId, setRestoreId] = useState(null);

  const restoreToClients = id => {
    const o = rejected.find(r => r.id === id);
    if (!o) return;
    const { reason, ...rest } = o;
    setRejected(p => p.filter(r => r.id !== id));
    setClients(c => [{ ...rest, completedDate: null, payment: "unpaid" }, ...c]);
    fireToast("Order restored to Clients!", "#15803d", "#bbf7d0");
    setViewOrder(null);
  };

  const restoreToPending = id => {
    const o = rejected.find(r => r.id === id);
    if (!o) return;
    const { reason, ...rest } = o;
    setRejected(p => p.filter(r => r.id !== id));
    setPending(p => [rest, ...p]);
    fireToast("Order moved back to Pending.", "#d97706", "#fde68a");
    setViewOrder(null);
  };

  return (
    <div style={{ padding: "28px 28px 40px" }}>
      <STitle title="Rejected Orders" sub={`${rejected.length} declined order${rejected.length !== 1 ? "s" : " "} — stored for reference`} />

      {rejected.length === 0 ? (
        <div className="fu card" style={{ padding: "60px 30px", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>👍</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: T.txt, marginBottom: 6 }}>No rejected orders</div>
          <div style={{ fontSize: 13, color: T.sub }}>Declined orders appear here with the reason.</div>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 14 }}>
          {rejected.map((o, i) => (
            <div key={o.id} className="fu card card-hover" style={{ padding: 20, animationDelay: `${i * .04}s`, transition: "all .2s" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 200 }}>
                  <Ava name={o.name} idx={i} size={44} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: T.txt }}>{o.name}</div>
                    <div style={{ fontSize: 12, color: T.muted, fontFamily: "'DM Mono',monospace" }}>{o.email} · {o.phone}</div>
                    <div style={{ fontSize: 12, color: T.sub, marginTop: 2 }}>📍 {o.address}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", flexShrink: 0 }}>
                  <span className="tag" style={{ background: pkgColor(o.pkg) + "20", color: pkgColor(o.pkg) }}>{o.pkg}</span>
                  <span style={{ padding: "3px 10px", borderRadius: 20, background: T.redBg, color: T.red, fontSize: 11, fontWeight: 600, border: `1px solid ${T.redBorder}` }}>{o.reason}</span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 7, margin: "14px 0" }}>
                {[
                  ["📅 Event Dates", `${fmtD(o.dateFrom)} → ${fmtD(o.dateTo)}`],
                  ["💰 Amount", fmt(o.price)],
                  ["📦 Package", o.pkg],
                  ["🎉 Event", o.event],
                ].map(([l, v]) => (
                  <div key={l} style={{ background: T.bg, borderRadius: 9, padding: "9px 11px" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: T.muted, marginBottom: 2 }}>{l}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: T.txt }}>{v}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button className="btn-outline" style={{ fontSize: 12, padding: "6px 12px" }} onClick={() => setViewOrder(o)}>View Details</button>
                <button className="btn-green" style={{ fontSize: 12, padding: "6px 12px" }} onClick={() => restoreToClients(o.id)}>Accept & Move to Clients</button>
                <button className="btn-amber" style={{ fontSize: 12, padding: "6px 12px" }} onClick={() => restoreToPending(o.id)}>Move Back to Pending</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewOrder && (
        <Modal onClose={() => setViewOrder(null)} wide>
          <ClientDetailCard o={viewOrder} />
          <div style={{ display: "flex", gap: 9, marginTop: 16, flexWrap: "wrap" }}>
            <button className="btn-green" onClick={() => restoreToClients(viewOrder.id)}>Accept & Move to Clients</button>
            <button className="btn-amber" onClick={() => restoreToPending(viewOrder.id)}>Move Back to Pending</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE: PACKAGES
═══════════════════════════════════════════ */
function PagePackages({ fireToast }) {

  const [packages, setPackages] = useState([]);
  const [editing, setEditing] = useState(null);
  const [tab, setTab] = useState("P1");
  const [loading, setLoading] = useState(true);

  /* ─────────────────────────────────────────────
   Firebase
───────────────────────────────────────────── */


  useEffect(() => {

    const unsubscribe = onSnapshot(collection(db, "Packages"), (snapshot) => {
      const firebasePackages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setPackages(firebasePackages);
      setTab(firebasePackages[0]?.id);
      setLoading(false);
    }
    );

    return () => unsubscribe();
  }, []);

  // ✅ 3️⃣ SAVE / UPDATE FUNCTION

  const savePkgDetail = async () => {
    try {
      await updateDoc(doc(db, "packages", editing.id), editing);

      // ✅ Update local UI immediately
      setPackages(prev =>
        prev.map(pkg => pkg.id === editing.id ? editing : pkg)
      );

      setEditing(null);
      fireToast("Package saved successfully!", "#1d4ed8", "#bfdbfe");

    } catch (error) {
      console.log(error);
      alert("Something went wrong!!!");
    }
  };

  if (loading) {
    return <div style={{ padding: 40 }}>Loading packages...</div>;
  }

  const current = packages.find(p => p.id === tab);

  if (!current) {
    return <div style={{ padding: 40 }}>No package found</div>;
  }

const updFeat = (key, field, value) => {
  setEditing(prev => ({
    ...prev,
    features: prev.features.map(f =>
      f.key === key ? { ...f, [field]: value } : f
    )
  }));
};

  return (
    <div style={{ padding: "28px 28px 40px" }}>
      <STitle title="Packages" sub="View and edit your photography packages, features, and pricing" />

      {/* Tabs */}
      <div className="fu" style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", animationDelay: ".04s" }}>
        {packages.map(p => (
          <button key={p.id} onClick={() => { setTab(p.id); setEditing(null); }} style={{ flex: 1, minWidth: 160, padding: "14px 18px", borderRadius: 12, border: `2px solid ${tab === p.id ? p.color : T.border}`, background: tab === p.id ? p.color + "14" : T.white, cursor: "pointer", transition: "all .18s", textAlign: "left" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4 }}>
              {p.tag}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: T.txt, marginBottom: 2 }}>
              {p.name}
            </div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 18, fontWeight: 550, color: p.color }}>
              {fmt(p.price)}
            </div>
          </button>
        ))}
      </div>

      {editing ? (
        <div className="fu card" style={{ padding: 24, animationDelay: ".06s" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: T.txt }}>Editing: {editing.name}</h3>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn-dark" onClick={savePkgDetail}>Save Changes</button>
              <button className="btn-outline" onClick={() => setEditing(null)}>Cancel</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: T.sub, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: ".06em" }}>Package Name</label>
              <input className="input-base" value={editing.name} onChange={e => setEditing(ed => ({ ...ed, name: e.target.value }))} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: T.sub, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: ".06em" }}>Price (₹)</label>
              <input className="input-base" type="number" value={editing.price} onChange={e => setEditing(ed => ({ ...ed, price: +e.target.value }))} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em" }}>Features</span>

            <button className="btn-outline" style={{ fontSize: 12, padding: "5px 12px" }}
              onClick={() => setEditing(e => ({ ...e, features: [...e.features, { key: `f${Date.now()}`, label: "New Feature", value: "" }] }))}>
              + Add Feature
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {editing.features.map(f => (
              <div key={f.key} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 8, alignItems: "center" }}>
                <input className="input-base" placeholder="Feature name" value={f.label} onChange={e => updFeat(f.key, "label", e.target.value)} style={{ fontSize: 12 }} />
                <input className="input-base" placeholder="Value" value={f.value} onChange={e => updFeat(f.key, "value", e.target.value)} style={{ fontSize: 12 }} />
                <button onClick={() => setEditing(e => ({ ...e, features: e.features.filter(x => x.key !== f.key) }))} style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${T.redBorder}`, background: T.redBg, color: T.red, cursor: "pointer", fontSize: 14, flexShrink: 0 }}>✕</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="fu card" style={{ padding: 24, animationDelay: ".06s" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: current.color, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>{current.tag} PACKAGE</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: T.txt }}>{current.name}</h3>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 24, fontWeight: 700, color: current.color, marginTop: 4 }}>{fmt(current.price)}</div>
            </div>
            <button className="btn-dark" onClick={() => setEditing({
              ...current,
              features: current.features ? [...current.features] : [],
            })}>
              Edit Package
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 10 }}>
            {current.features.map(f => (
              <div key={f.key} style={{ padding: "12px 14px", borderRadius: 10, background: T.bg, border: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 4 }}>{f.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.txt }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE: EVENTS / OFFERS
═══════════════════════════════════════════ */
function PageEvents({ fireToast }) {
  const [events, setEvents] = useState(INIT_EVENTS);
  const [showForm, setShowForm] = useState(false);
  const [editEvt, setEditEvt] = useState(null);

  const BLANK = { title: "", discount: 10, desc: "", applies: "all", startDate: "", endDate: "", active: true, color: "#6366f1" };
  const [form, setForm] = useState(BLANK);

  const openNew = () => { setForm(BLANK); setEditEvt(null); setShowForm(true); };
  const openEdit = ev => { setForm({ ...ev }); setEditEvt(ev.id); setShowForm(true); };

  const saveForm = () => {
    if (!form.title.trim()) return;
    if (editEvt) {
      setEvents(p => p.map(e => e.id === editEvt ? { ...form, id: editEvt } : e));
      fireToast("Event updated!", "#7c3aed", "#ddd6fe");
    } else {
      setEvents(p => [{ ...form, id: mkEvId() }, ...p]);
      fireToast("New event created!", "#7c3aed", "#ddd6fe");
    }
    setShowForm(false);
  };

  const toggleActive = id => {
    setEvents(p => p.map(e => e.id === id ? { ...e, active: !e.active } : e));
    fireToast("Event status toggled.", "#1d4ed8", "#bfdbfe");
  };

  const deleteEvent = id => {
    setEvents(p => p.filter(e => e.id !== id));
    fireToast("Event deleted.", "#dc2626", "#fecaca");
  };

  const active = events.filter(e => e.active);
  const inactive = events.filter(e => !e.active);

  const COLORS = ["#dc2626", "#d97706", "#15803d", "#1d4ed8", "#7c3aed", "#db2777", "#0ea5e9", "#f97316"];

  return (
    <div style={{ padding: "28px 28px 40px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 10 }}>
        <STitle title="Events & Offers" sub="Create seasonal promotions, festival offers, and discount campaigns" />
        <button className="btn-dark" onClick={openNew} style={{ flexShrink: 0 }}>+ Create Event</button>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, marginBottom: 22 }}>
        <StatCard label="Total Events" value={events.length} icon="🎉" color={T.purple} delay={0} sub="All campaigns" />
        <StatCard label="Active Now" value={active.length} icon="🟢" color={T.green} delay={.07} sub="Currently running" />
        <StatCard label="Paused" value={inactive.length} icon="⏸" color={T.muted} delay={.14} sub="Inactive campaigns" />
        <StatCard label="Avg. Discount" value={events.length ? `${Math.round(events.reduce((s, e) => s + e.discount, 0) / events.length)}%` : "—"} icon="🏷️" color={T.amber} delay={.21} sub="Across all events" />
      </div>

      {/* Active events */}
      {active.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Active Events</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 14 }}>
            {active.map((ev, i) => (
              <div key={ev.id} className="fu card card-hover" style={{ padding: 20, transition: "all .2s", animationDelay: `${i * .05}s`, borderTop: `3px solid ${ev.color}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: T.txt }}>{ev.title}</div>
                    <div style={{ fontSize: 12, color: T.sub, marginTop: 3 }}>{ev.desc}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: ev.color, flexShrink: 0, marginLeft: 10 }}>{ev.discount}%</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 14 }}>
                  {[
                    ["📅 From", fmtD(ev.startDate)],
                    ["📅 To", fmtD(ev.endDate)],
                    ["📦 Applies", ev.applies === "all" ? "All Packages" : ev.applies],
                    ["🏷️ Discount", `${ev.discount}% OFF`],
                  ].map(([l, v]) => (
                    <div key={l} style={{ background: T.bg, borderRadius: 8, padding: "8px 10px" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: T.muted, marginBottom: 2 }}>{l}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: T.txt }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 7 }}>
                  <button className="btn-outline" style={{ fontSize: 11, padding: "5px 10px" }} onClick={() => openEdit(ev)}>Edit</button>
                  <button className="btn-amber" style={{ fontSize: 11, padding: "5px 10px" }} onClick={() => toggleActive(ev.id)}>Pause</button>
                  <button className="btn-red" style={{ fontSize: 11, padding: "5px 10px" }} onClick={() => deleteEvent(ev.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inactive events */}
      {inactive.length > 0 && (
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Paused / Inactive</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 14 }}>
            {inactive.map((ev, i) => (
              <div key={ev.id} className="fu card" style={{ padding: 20, opacity: .7, animationDelay: `${i * .04}s`, borderTop: `3px solid #d0d3de` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: T.sub }}>{ev.title}</div>
                    <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>{ev.desc}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: T.muted, flexShrink: 0, marginLeft: 8 }}>{ev.discount}%</div>
                </div>
                <div style={{ fontSize: 11, color: T.muted, marginBottom: 12, fontFamily: "'DM Mono',monospace" }}>{fmtD(ev.startDate)} → {fmtD(ev.endDate)}</div>
                <div style={{ display: "flex", gap: 7 }}>
                  <button className="btn-outline" style={{ fontSize: 11, padding: "5px 10px" }} onClick={() => openEdit(ev)}>Edit</button>
                  <button className="btn-green" style={{ fontSize: 11, padding: "5px 10px" }} onClick={() => toggleActive(ev.id)}>Activate</button>
                  <button className="btn-red" style={{ fontSize: 11, padding: "5px 10px" }} onClick={() => deleteEvent(ev.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {events.length === 0 && (
        <div className="fu card" style={{ padding: "60px 30px", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎊</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: T.txt, marginBottom: 6 }}>No events yet</div>
          <div style={{ fontSize: 13, color: T.sub, marginBottom: 18 }}>Create your first seasonal promotion or festival offer.</div>
          <button className="btn-dark" onClick={openNew}>+ Create First Event</button>
        </div>
      )}

      {/* Create / Edit modal */}
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: T.txt, marginBottom: 18 }}>{editEvt ? "Edit Event" : "Create New Event"}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", display: "block", marginBottom: 5 }}>Event Title *</label>
              <input className="input-base" placeholder="e.g. Christmas Special" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", display: "block", marginBottom: 5 }}>Description</label>
              <input className="input-base" placeholder="Short description of the offer" value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", display: "block", marginBottom: 5 }}>Discount (%)</label>
                <input className="input-base" type="number" min="1" max="100" value={form.discount} onChange={e => setForm(f => ({ ...f, discount: +e.target.value }))} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", display: "block", marginBottom: 5 }}>Applies To</label>
                <select className="input-base" value={form.applies} onChange={e => setForm(f => ({ ...f, applies: e.target.value }))} style={{ cursor: "pointer" }}>
                  <option value="all">All Packages</option>
                  <option value="Silver">Silver Only</option>
                  <option value="Gold">Gold Only</option>
                  <option value="Diamond">Diamond Only</option>
                  <option value="Gold,Diamond">Gold & Diamond</option>
                </select>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", display: "block", marginBottom: 5 }}>Start Date</label>
                <input className="input-base" type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", display: "block", marginBottom: 5 }}>End Date</label>
                <input className="input-base" type="date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} />
              </div>
            </div>
            {/* Color picker */}
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", display: "block", marginBottom: 8 }}>Event Color</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {COLORS.map(c => (
                  <button key={c} onClick={() => setForm(f => ({ ...f, color: c }))} style={{ width: 28, height: 28, borderRadius: "50%", background: c, border: form.color === c ? "3px solid #1a1a2e" : "2px solid transparent", cursor: "pointer", transition: "all .14s" }} />
                ))}
              </div>
            </div>
            {/* Preview */}
            <div style={{ padding: "12px 16px", borderRadius: 10, background: form.color + "14", border: `1.5px solid ${form.color}40`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.txt }}>{form.title || "Event Title"}</div>
                <div style={{ fontSize: 11, color: T.sub }}>{form.desc || "Description…"} · {form.applies === "all" ? "All Packages" : form.applies}</div>
              </div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: form.color }}>{form.discount}%</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 9, marginTop: 20 }}>
            <button className="btn-dark" style={{ flex: 1, justifyContent: "center" }} onClick={saveForm}>{editEvt ? "Save Changes" : "Create Event"}</button>
            <button className="btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE: ANALYTICS
═══════════════════════════════════════════ */
function PageAnalytics({ pending, clients, rejected }) {
  const totalRev = clients.reduce((s, c) => s + c.price, 0);
  const completed = clients.filter(c => c.completedDate).length;
  const active = clients.filter(c => !c.completedDate).length;

  const pkgData = useMemo(() => {
    const all = [...clients, ...rejected, ...pending];
    const map = {};
    all.forEach(o => { map[o.pkg] = (map[o.pkg] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [clients, rejected, pending]);

  const revData = useMemo(() => {
    const map = {};
    clients.forEach(c => { const m = c.dateFrom?.slice(0, 7) || ""; if (m) map[m] = (map[m] || 0) + c.price; });
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0])).slice(-6);
  }, [clients]);

  const maxRev = Math.max(...revData.map(([, v]) => v), 1);

  const payData = useMemo(() => [
    ["Full Paid", clients.filter(c => c.payment === "full").length, T.green],
    ["Advance", clients.filter(c => c.payment === "advance").length, T.amber],
    ["Unpaid", clients.filter(c => c.payment === "unpaid" || !c.payment).length, T.red],
  ], [clients]);

  return (
    <div style={{ padding: "28px 28px 40px" }}>
      <STitle title="Analytics" sub="Studio97 business overview" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, marginBottom: 20 }}>
        <StatCard label="Total Revenue" value={fmt(totalRev)} icon="💰" color={T.navy} delay={0} sub="From all clients" />
        <StatCard label="Active Bookings" value={active} icon="📅" color={T.blue} delay={.06} sub="Upcoming events" />
        <StatCard label="Completed" value={completed} icon="🏆" color={T.green} delay={.12} sub="Events done" />
        <StatCard label="Rejected" value={rejected.length} icon="❌" color={T.red} delay={.18} sub="Declined orders" />
        <StatCard label="Pending" value={pending.length} icon="⏳" color={T.amber} delay={.24} sub="Awaiting review" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, marginBottom: 14 }}>
        {/* Revenue chart */}
        <div className="fu card" style={{ padding: 22, animationDelay: ".3s" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 14 }}>Monthly Revenue</div>
          {revData.length === 0 ? <div style={{ textAlign: "center", padding: "30px 0", color: T.muted, fontSize: 13 }}>No data yet.</div> : (
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 100 }}>
              {revData.map(([m, v], i) => (
                <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: T.muted }}>{(v / 1000).toFixed(0)}k</div>
                  <div style={{ width: "100%", borderRadius: "4px 4px 0 0", height: `${(v / maxRev) * 76}px`, background: i === revData.length - 1 ? T.navy : "#e8eaf2", transition: "height .7s" }} />
                  <div style={{ fontSize: 9, color: T.muted, fontFamily: "'DM Mono',monospace" }}>{m.slice(5)}/{m.slice(2, 4)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Packages */}
        <div className="fu card" style={{ padding: 22, animationDelay: ".36s" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 14 }}>Package Popularity</div>
          {pkgData.map(([pkg, cnt]) => {
            const c = pkgColor(pkg); const tot = pkgData.reduce((s, [, v]) => s + v, 0);
            return (
              <div key={pkg} style={{ marginBottom: 11 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: T.txt, fontWeight: 500 }}>{pkg}</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 700, color: c }}>{cnt}</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: "#f0f2f8", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(cnt / tot) * 100}%`, background: c, borderRadius: 99, transition: "width .7s" }} />
                </div>
              </div>
            );
          })}
        </div>
        {/* Payment breakdown */}
        <div className="fu card" style={{ padding: 22, animationDelay: ".42s" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 14 }}>Payment Breakdown</div>
          {payData.map(([l, v, c]) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: T.txt, fontWeight: 500 }}>{l}</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 700, color: c }}>{v}</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: "#f0f2f8", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: clients.length ? `${(v / clients.length) * 100}%` : "0%", background: c, borderRadius: 99, transition: "width .7s" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════ */
export default function Backend() {
  const [page, setPage] = useState("dashboard");
  const [pending, setPending] = useState(INIT_PENDING);
  const [clients, setClients] = useState(INIT_CLIENTS);
  const [rejected, setRejected] = useState(INIT_REJECTED);
  const [toast, setToast] = useState(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (document.getElementById("s97gcss")) return;
    const s = document.createElement("style"); s.id = "s97gcss"; s.textContent = GCSS; document.head.appendChild(s);
  }, []);

  const fireToast = useCallback((msg, dot, border) => {
    setToast({ msg, dot, border }); setTimeout(() => setToast(null), 2800);
  }, []);

  const navigate = useCallback(id => { setPage(id); setDrawer(false); }, []);

  const NAV = [
    { id: "dashboard", label: "Order Requests", icon: "📋", badge: pending.length },
    { id: "clients", label: "Clients", icon: "👥", badge: 0 },
    { id: "rejected", label: "Rejected Orders", icon: "❌", badge: rejected.length },
    { id: "payments", label: "Payments", icon: "💳", badge: 0 },
    { id: "events", label: "Events & Offers", icon: "🎉", badge: 0 },
    { id: "packages", label: "Packages", icon: "📦", badge: 0 },
    { id: "analytics", label: "Analytics", icon: "📊", badge: 0 },
  ];

  const cur = NAV.find(n => n.id === page);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: T.bg, overflow: "hidden", fontFamily: "'DM Sans',sans-serif" }}>
      <Toast t={toast} />

      {drawer && <div className="s97-overlay" onClick={() => setDrawer(false)} />}

      {/* ── DRAWER ── */}
      <div className={`s97-drawer${drawer ? " open" : ""}`}>
        {/* Header */}
        <div style={{ padding: "18px 18px 14px", borderBottom: `1.5px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, background: T.navy, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 14, color: "#fff", letterSpacing: "-.5px" }}>S97</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: T.txt, lineHeight: 1.1 }}>Studio97</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.sub, textTransform: "uppercase", letterSpacing: ".08em", marginTop: 1 }}>Admin Panel</div>
            </div>
          </div>
          <button onClick={() => setDrawer(false)} className="btn-outline" style={{ padding: "4px 10px", fontSize: 13 }}>✕</button>
        </div>

        {/* Pending alert */}
        {pending.length > 0 && (
          <div style={{ padding: "10px 14px 0" }}>
            <button onClick={() => navigate("dashboard")} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", background: T.amberBg, border: `1px solid ${T.amberBorder}`, borderRadius: 10, cursor: "pointer" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.amber, animation: "blink 1.8s infinite", flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: T.amber, fontFamily: "'DM Mono',monospace" }}>{pending.length} pending order{pending.length !== 1 ? "s" : ""}</span>
            </button>
          </div>
        )}

        {/* Nav */}
        <nav style={{ flex: 1, padding: "14px 10px", overflowY: "auto" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: ".12em", padding: "0 6px", marginBottom: 8 }}>Pages</div>
          {NAV.map(n => (
            <button key={n.id} className={`s97-nav-btn${page === n.id ? " active" : ""}`} onClick={() => navigate(n.id)}>
              <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0 }}>{n.icon}</span>
              <span style={{ flex: 1 }}>{n.label}</span>
              {n.badge > 0 && <span style={{ padding: "2px 8px", borderRadius: 12, flexShrink: 0, background: page === n.id ? "rgba(255,255,255,.22)" : T.navy, color: "#fff", fontSize: 10, fontWeight: 700, fontFamily: "'DM Mono',monospace" }}>{n.badge}</span>}
            </button>
          ))}
        </nav>

        {/* User */}
        <div style={{ padding: "13px 16px", borderTop: `1.5px solid ${T.border}`, display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: T.navy, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", fontFamily: "'DM Mono',monospace" }}>AD</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.txt }}>Admin</div>
            <div style={{ fontSize: 11, color: T.muted }}>Studio97 Owner</div>
          </div>
        </div>
      </div>

      {/* ── TOPBAR ── */}
      <header style={{ height: 60, background: T.white, borderBottom: `1.5px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", flexShrink: 0, boxShadow: "0 1px 10px rgba(0,0,0,.05)", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <button onClick={() => setDrawer(d => !d)} style={{ width: 40, height: 40, borderRadius: 10, border: `1.5px solid ${T.border}`, background: T.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div className="s97-ham">
              <span style={{ transform: drawer ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <span style={{ opacity: drawer ? 0 : 1 }} />
              <span style={{ transform: drawer ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </div>
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 32, height: 32, background: T.navy, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 12, color: "#fff", letterSpacing: "-.5px" }}>S97</div>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: T.txt }}>Studio97</span>
          </div>
        </div>

        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 7, pointerEvents: "none" }}>
          <span style={{ fontSize: 15 }}>{cur?.icon}</span>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, color: T.txt, whiteSpace: "nowrap" }}>{cur?.label}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {pending.length > 0 && (
            <button onClick={() => navigate("dashboard")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", background: T.amberBg, border: `1px solid ${T.amberBorder}`, borderRadius: 20, cursor: "pointer" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.amber, animation: "blink 1.8s infinite" }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: T.amber, fontFamily: "'DM Mono',monospace" }}>{pending.length} pending</span>
            </button>
          )}
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: T.navy, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "'DM Mono',monospace" }}>AD</div>
        </div>
      </header>

      {/* ── PAGES ── */}
      <main style={{ flex: 1, overflowY: "auto" }} key={page}>
        {page === "dashboard" && <PageDashboard pending={pending} setPending={setPending} clients={clients} setClients={setClients} rejected={rejected} setRejected={setRejected} fireToast={fireToast} />}
        {page === "clients" && <PageClients clients={clients} setClients={setClients} rejected={rejected} setRejected={setRejected} setPending={setPending} fireToast={fireToast} />}
        {page === "rejected" && <PageRejected rejected={rejected} setRejected={setRejected} clients={clients} setClients={setClients} setPending={setPending} fireToast={fireToast} />}
        {page === "payments" && <PagePayments clients={clients} setClients={setClients} fireToast={fireToast} />}
        {page === "events" && <PageEvents fireToast={fireToast} />}
        {page === "packages" && <PagePackages fireToast={fireToast} />}
        {page === "analytics" && <PageAnalytics pending={pending} clients={clients} rejected={rejected} />}
      </main>
    </div>
  );
}