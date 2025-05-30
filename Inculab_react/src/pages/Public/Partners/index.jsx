import React, { useEffect, useState, useContext } from "react";
import "./Partners.css";
import { Button } from "./components/ui/button";
import { Plus } from "lucide-react";
import ProjectList from "./components/ProjectList";
import { useNavigate } from "react-router-dom";

export default function PartnersPage() {
  const [selectedArea, setSelectedArea] = useState("all");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const proyectosIniciales = [
      {
        id: 1,
        nombre: "Proyecto AI",
        descripcion: "Proyecto de inteligencia artificial",
        area: "Tech",
      },
      {
        id: 2,
        nombre: "Energía Solar",
        descripcion: "Proyecto de sostenibilidad ambiental",
        area: "Sostenibilidad",
      },
      {
        id: 3,
        nombre: "Consultoría IT",
        descripcion: "Servicios tecnológicos para empresas",
        area: "Servicios",
      },
      {
        id: 4,
        nombre: "Salud Mental",
        descripcion: "App para terapia online",
        area: "Salud",
      },
      {
        id: 5,
        nombre: "App Web",
        descripcion: "Desarrollo web fullstack",
        area: "Tech",
      },
    ];

    setProjects(proyectosIniciales);
  }, []);

  const handleAreaChange = (area) => {
    setSelectedArea(area);
  };
  const navigate = useNavigate();

  return (
    <div className="partners-container">
      <h1 className="partners-title white-text">Partners</h1>
      <p className="partners-subtitle white-text">
        Encuentra socios potenciales para tu proyecto
      </p>

      <div className="add-project">
        <Button
          className="add-project-button"
          onClick={() => navigate("/partners/form")}
        >
          <Plus className="add-project-icon" /> Añadir mi proyecto o tesis
        </Button>
      </div>

      <div className="filters-container">
        <div className="filter-group">
          {["all", "Tech", "Sostenibilidad", "Servicios", "Salud"].map(
            (area) => (
              <button
                key={area}
                className={`filter-button${
                  selectedArea === area ? " active" : ""
                }`}
                onClick={() => handleAreaChange(area)}
              >
                {area === "all" ? "Todos" : area}
              </button>
            )
          )}
        </div>
      </div>

      <ProjectList selectedArea={selectedArea} />
    </div>
  );
}
