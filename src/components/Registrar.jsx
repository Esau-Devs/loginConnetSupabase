

import { useState } from "react";

export default function Registrarse() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

/*   try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al registrar");
      }

      const data = await response.json();
      console.log("Usuario registrado:", data);

      // Opcional: limpiar formulario o redirigir
      setFormData({ nombre: "", email: "", password: "" });
      // window.location.href = "/dashboard";

    } catch (error) {
      console.error("Fallo en el registro:", error.message);
      alert("Error: " + error.message);
    } */
};

  return (
    <div className="mt-4 w-full">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="border border-gray-400/10 p-3 w-full rounded-xl"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-400/10 p-3 w-full rounded-xl"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-400/10 p-3 w-full rounded-xl"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-600/80 text-white w-full py-3  rounded-xl cursor-pointer transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
