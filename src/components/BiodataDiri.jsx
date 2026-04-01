import Foto from "./Foto";
import Nama from "./Nama";
import Kontak from "./Kontak";
import Pendidikan from "./Pendidikan";
import Skill from "./Skill";
import SosialMedia from "./SosialMedia";
import "../custom.css";

export default function BiodataDiri() {
  return (
    <div className="biodata-container">
      <div className="biodata-card">
        <div className="card-header">
          <h1>📋 Biodata Diri</h1>
          <div className="header-decoration"></div>
        </div>

        <div className="profile-section">
          <Foto />
          <div className="profile-info">
            <Nama />
            <Kontak />
          </div>
        </div>

        <div className="details-section">
          <div className="section-card">
            <div className="section-title">
              <span className="section-icon">🎓</span>
              <h2>Pendidikan</h2>
            </div>
            <Pendidikan />
          </div>

          <div className="section-card">
            <div className="section-title">
              <span className="section-icon">💪</span>
              <h2>Keahlian</h2>
            </div>
            <Skill />
          </div>

          <div className="section-card">
            <div className="section-title">
              <span className="section-icon">🌐</span>
              <h2>Sosial Media</h2>
            </div>
            <SosialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}