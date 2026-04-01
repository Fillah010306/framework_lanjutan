import fotoProfil from "../assets/fotoprofil.jpeg";

export default function Foto() {
  return (
    <div className="foto-container">
      <img 
        className="profile-img" 
        src={fotoProfil} 
        alt="Foto Profil" 
      />
    </div>
  );
}