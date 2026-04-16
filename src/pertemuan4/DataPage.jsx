import { useState } from "react";
import data from "./data.json";

export default function DataPage() {
  const [view, setView] = useState("guest");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  const allTags = [...new Set(data.flatMap(item => item.tags))];
  const allCategory = [...new Set(data.map(item => item.category))];

  const filtered = data.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category ? item.category === category : true;
    const matchTag = tag ? item.tags.includes(tag) : true;

    return matchSearch && matchCategory && matchTag;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #667eea, #764ba2)",
      padding: "20px",
      color: "#000"
    }}>

      <h1 style={{
        textAlign: "center",
        fontSize: "40px",
        marginBottom: "20px"
      }}>
        🚀 Data Services
      </h1>

      {/* TOGGLE */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
        <button onClick={() => setView("guest")} style={btn(view === "guest")}>
          Guest View
        </button>
        <button onClick={() => setView("admin")} style={btn(view === "admin")}>
          Admin View
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search..."
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      {/* FILTER */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <select onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
          <option value="">All Category</option>
          {allCategory.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>

        <select onChange={(e) => setTag(e.target.value)} style={inputStyle}>
          <option value="">All Tags</option>
          {allTags.map((t, i) => (
            <option key={i}>{t}</option>
          ))}
        </select>
      </div>

      {/* ================= */}
      {/* GUEST VIEW */}
      {/* ================= */}
      {view === "guest" && (
        <div style={gridStyle}>
          {filtered.map(item => (
            <div key={item.id} style={cardStyle}>
              <img src={item.image} style={imgStyle} />

              <div style={{ padding: "10px" }}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <p>👨‍💻 {item.details.developer}</p>

                <div>
                  {item.tags.map((t, i) => (
                    <span key={i} style={tagStyle}>{t}</span>
                  ))}
                </div>

                <p style={{ fontWeight: "bold", color: "green" }}>
                  Rp {item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= */}
      {/* ADMIN VIEW */}
      {/* ================= */}
      {view === "admin" && (
        <div style={{ overflowX: "auto", background: "#fff", borderRadius: "10px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "#eee" }}>
              <tr>
                <th>Nama</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Developer</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => (
                <tr key={item.id} style={{ textAlign: "center", borderTop: "1px solid #ccc" }}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>Rp {item.price.toLocaleString()}</td>
                  <td>{item.details.developer}</td>
                  <td>{item.tags.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* STYLE */
const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btn = (active) => ({
  padding: "10px 20px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer",
  background: active ? "#3b82f6" : "#fff",
  color: active ? "#fff" : "#000"
});

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
};

const imgStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover"
};

const tagStyle = {
  background: "#ddd",
  padding: "5px 8px",
  margin: "3px",
  display: "inline-block",
  borderRadius: "6px",
  fontSize: "12px"
};