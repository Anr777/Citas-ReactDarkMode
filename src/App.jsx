import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPacientes";
function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});
  // useEffect(() => {
  //   const obtenerLs = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  //     setPacientes(pacientesLS);
  //   };
  //   obtenerLs();
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("pacientes", JSON.stringify(pacientes));
  // }, [pacientes]);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  const eliminarPaciente = (id) => {
    const pacientesAtualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesAtualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
