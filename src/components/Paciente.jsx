import { useEffect } from "react";
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;
  function handleEliminar() {
    const respuesta = confirm("Deseas Elimnar este Paciente");
    {
      respuesta && eliminarPaciente(id);
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case text-gray-800">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case text-gray-800">
          {propietario}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray uppercase">
        Email:{" "}
        <span className="font-normal normal-case text-gray-800">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray uppercase">
        Alta:{" "}
        <span className="font-normal normal-case text-gray-800">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case text-gray-800">
          {sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-500 text-cyan-50 font-bold uppercase rounded-lg hover:bg-indigo-700"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleEliminar}
          className="py-2 px-10 bg-red-500 text-cyan-50 font-bold uppercase rounded-lg hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
