import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import styles from "./Form.module.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    umur: "",
    kelas: "",
    jadwal: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = (name, value) => {
    let errorMsg = "";
    if (name === "nama") {
      if (!value) errorMsg = "Nama wajib diisi!";
      else if (/\d/.test(value)) errorMsg = "Nama tidak boleh ada angka!";
      else if (value.length < 3) errorMsg = "Minimal 3 karakter!";
    }
    if (name === "email") {
      if (!value) errorMsg = "Email wajib diisi!";
      else if (!value.includes("@")) errorMsg = "Harus ada simbol @!";
      else if (!value.endsWith(".com")) errorMsg = "Harus berakhiran .com!";
    }
    if (name === "umur") {
      if (!value) errorMsg = "Umur wajib diisi!";
      else if (value < 17) errorMsg = "Minimal 17 tahun!";
      else if (value > 50) errorMsg = "Maksimal 50 tahun!";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const isFormValid =
    Object.values(errors).every((err) => err === "") &&
    Object.values(formData).every((val) => val !== "");

  return (
    <div className={styles.formWrapper}>
      <div className={styles.cardForm}>
        <h2 className={styles.title}>Form Percobaan</h2>

        <div className="space-y-2">
          <InputField
            label="Nama"
            name="nama"
            type="text"
            value={formData.nama}
            onChange={handleChange}
            error={errors.nama}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Umur"
            name="umur"
            type="number"
            value={formData.umur}
            onChange={handleChange}
            error={errors.umur}
          />

          <SelectField
            label="Kelas"
            name="kelas"
            options={["React JS", "Tailwind CSS", "Node JS"]}
            value={formData.kelas}
            onChange={handleChange}
          />
          <SelectField
            label="Jadwal"
            name="jadwal"
            options={["Pagi", "Siang", "Malam"]}
            value={formData.jadwal}
            onChange={handleChange}
          />
        </div>

        {isFormValid && (
          <button
            onClick={() => setSubmittedData(formData)}
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
          >
            Kirim Data
          </button>
        )}

        {submittedData && (
          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
            <h3 className="text-indigo-900 font-bold text-sm mb-2 uppercase italic border-b border-indigo-200 pb-1">
              Data Terkirim:
            </h3>
            <div className="text-xs space-y-1 text-indigo-700">
              <p><b>Nama:</b> {submittedData.nama}</p>
              <p><b>Email:</b> {submittedData.email}</p>
              <p><b>Kelas:</b> {submittedData.kelas}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}