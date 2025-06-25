import { useState } from "react";

export default function LoginForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    /* try{
      const response = await fetch("api/auth/signin",{
        method: "POST",
        headers:{
          "Content-Type ": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "error al registrar")
      }

      const data = await response.json();
      setFormData({ nombre: "", email: "", password: "" });

    } catch (error){
      console.error(" fallo el registro", error.message)
       alert("Error: " + error.message);
    } */
  };

  return (
    <div className="mt-4 w-full">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <input
              type="email"
              name="email"
              placeholder="Ingrese su correo"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400/10 p-3  mb-4 w-full rounded-xl"
              required
            />
            <div>
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-blue-600 hover:bg-blue-600/80 text-white w-full py-3  rounded-xl cursor-pointer"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-400/10 p-3  mb-4 w-full rounded-xl"
              required
            />
            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-600/80 text-white w-full py-3  rounded-xl cursor-pointer"
              >
                Loguearse
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
