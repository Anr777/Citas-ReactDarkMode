import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-cyan-100">
            Listado Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-cyan-50 text-center">
            Administra tus{" "}
            <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-cyan-100">
            Agrega Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-cyan-50 text-center">
            Administra tus{" "}
            <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
