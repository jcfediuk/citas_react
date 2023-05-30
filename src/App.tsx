/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes") || "") ?? []
  );

  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id: any) => {
    const pacientesActualizados = pacientes.filter(
      (paciente: any) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  const handlePaciente = (paciente: any) => {
    setPaciente(paciente);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={handlePaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;