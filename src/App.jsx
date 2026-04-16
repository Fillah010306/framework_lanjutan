import BiodataDiri from "./components/BiodataDiri";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menampilkan BiodataDiri bawaan kamu */}
      <BiodataDiri />

      {/* Navigasi Tambahan ke Tugas Pertemuan 3 */}
      <div className="flex justify-center pb-10">
        <a 
          href="/pertemuan3" 
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition text-sm shadow-lg"
        >
          Lihat Tugas Form Pertemuan 3 →
        </a>
      </div>
    </div>
  );
}

export default App;