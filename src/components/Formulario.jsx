import React, { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } else console.log("no hay nada");
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };
    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;
      console.log(objetoPaciente);
      console.log(paciente);

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    // Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center text-cyan-100">
          Seguimiento Pacientes
        </h2>
        <p className="text-cyan-50 text-lg mt-5 text-center mb-10">
          Agrega Pacientes y {""}
          <span className="text-indigo-500 font-bold">Administrativos</span>
        </p>

        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-slate-800 shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {error && <Error mensaje="Todos los campos son obligatorios" />}
          <div className="mb-5">
            <label className="text-cyan-50 block " htmlFor="mascota">
              Nombre Mascota
            </label>
            <input
              id="mascota"
              className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
              type="text"
              placeholder="Nombre de la Mascota"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label className="text-cyan-50 block " htmlFor="propietario">
              Propietario
            </label>
            <input
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
              type="text"
              placeholder="Nombre del Propietario"
              value={propietario}
              onChange={(e) => {
                setPropietario(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label className="text-cyan-50 block " htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
              type="email"
              placeholder="Email Contacto"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label className="text-cyan-50 block " htmlFor="alta">
              Alta
            </label>
            <input
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
              type="date"
              placeholder="alta"
              value={fecha}
              onChange={(e) => {
                setFecha(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label className="text-cyan-50 block " htmlFor="sintomas">
              Sintomas
            </label>

            <textarea
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los Síntomas"
              name=""
              id="sintomas"
              value={sintomas}
              onChange={(e) => {
                setSintomas(e.target.value);
              }}
            ></textarea>
          </div>

          <input
            type="submit"
            className="bg-indigo-500 w-full p-3 text-cyan-50 uppercase font-bold border-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-md transition-all"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
