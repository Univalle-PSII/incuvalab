import React, { useState, useRef, useEffect, useContext } from "react";
import "./PartnersForm.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./components/ui/select";
import { Checkbox } from "./components/ui/checkbox";
import { ChevronLeft, X, Check, Upload } from "lucide-react";
import { StoreContext } from "@/context/store";
import Toast from "./components/Toast";

export default function PartnersForm() {
  const store = useContext(StoreContext);
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState("Tecnología");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const allSkills = [
    "Desarrollo web",
    "Marketing digital",
    "Análisis de datos",
    "Sostenibilidad",
    "Ventas",
    "Medicina",
    "Diseño UX/UI",
    "Gestión de proyectos",
    "Inteligencia artificial",
    "Finanzas",
    "Investigación",
    "Biomedica",
  ];

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    descripcion_proyecto: "",
    area: "Tecnología",
    etapa_proyecto: "Idea inicial",
    fotos: [],
    video: [],
    socios_buscados: [],
    otra_habilidad: "",
    contacto: "",
  });

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const toggleSocio = (skill) => {
    setFormData((prev) => {
      const updated = prev.socios_buscados.includes(skill)
        ? prev.socios_buscados.filter((s) => s !== skill)
        : [...prev.socios_buscados, skill];
      return { ...prev, socios_buscados: updated };
    });
  };

  const subirImagenACloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "proyectos_upload");
    data.append("cloud_name", "dj1t7xem6");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dj1t7xem6/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  const handleAreaChange = (value) => {
    setSelectedArea(value);
    setFormData({ ...formData, area: value });
  };

  const isValidName = (name) => /^[a-zA-Z0-9\s]+$/.test(name) && wordCount(name) <= 20;
  const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;
  const isValidContact = (contact) =>
    /^\+591\s\d{8}$/.test(contact) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

  const handleSubmit = async () => {
    if (!formData.nombre.trim() || !isValidName(formData.nombre)) {
      alert("Nombre inválido. Solo letras y números, máximo 20 palabras.");
      return;
    }
    const descripcionCount = wordCount(formData.descripcion);
    if (descripcionCount < 25 || descripcionCount > 50) {
      alert("Descripción breve debe tener entre 25 y 50 palabras.");
      return;
    }
    const descripcionDetalladaCount = wordCount(formData.descripcion_proyecto);
    if (descripcionDetalladaCount < 50 || descripcionDetalladaCount > 100) {
      alert("Descripción detallada debe tener entre 50 y 100 palabras.");
      return;
    }
    if (!selectedArea) {
      alert("Selecciona un área del proyecto.");
      return;
    }
    if (!formData.etapa_proyecto) {
      alert("Selecciona una etapa del proyecto.");
      return;
    }
    if (formData.fotos.length < 1) {
      alert("Debes subir al menos una imagen del proyecto.");
      return;
    }
    if (!isValidContact(formData.contacto)) {
      alert("Contacto inválido. Usa un número como +591 63936223 o un correo electrónico válido.");
      return;
    }
    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      store.setLoading(true);

      const payload = {
        proyectos: {
          nombre: formData.nombre,
          descripcion: formData.descripcion,
          descripcion_proyecto: formData.descripcion_proyecto,
          area: formData.area,
          etapa_proyecto: formData.etapa_proyecto,
          contacto: formData.contacto,
          fotos: formData.fotos,
          video: formData.video,
          socios_buscados: [
            ...formData.socios_buscados,
            ...(formData.otra_habilidad.trim()
              ? [formData.otra_habilidad.trim()]
              : []),
          ],
          otra_habilidad: formData.otra_habilidad.trim(),
        },
      };

      const response = await fetch("http://localhost:4014/proyectos/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setToastMessage("¡Proyecto publicado exitosamente!");
        setShowToast(true);

        setFormData({
          nombre: "",
          descripcion: "",
          descripcion_proyecto: "",
          area: "Tecnología",
          etapa_proyecto: "Idea inicial",
          fotos: [],
          video: [],
          contacto: "",
          socios_buscados: [],
          otra_habilidad: "",
        });
        setSelectedArea("Tecnología");
        setTermsAccepted(false);
        setTimeout(() => {
          setShowToast(false);
          navigate("/partners");
        }, 3000);
      } else {
        alert(`Error al publicar: ${data.message || "Error desconocido"}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor.");
    } finally {
      store.setLoading(false);
    }
  };

  return (
    <div className="new-project-container">
      <div className="form-wrapper">
        <div className="header-section">
          <Button asChild variant="ghost" size="sm" className="back-button">
            <Link to="/partners">
              <ChevronLeft className="icon" /> Volver a Partners
            </Link>
          </Button>
          <h1 className="form-title">Añadir nuevo proyecto</h1>
          <p className="form-subtitle">
            Comparte los detalles de tu proyecto o tesis para encontrar socios
            ideales
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Información del proyecto</CardTitle>
            <CardDescription>
              Completa la información para que otros emprendedores puedan
              conocer tu proyecto
            </CardDescription>
          </CardHeader>
          <CardContent className="form-section">
            <div className="field-group">
              <Label htmlFor="nombre">Nombre del proyecto *</Label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={handleInputChange("nombre")}
                required
                placeholder="Ej: App para monitoreo de salud"
              />
            </div>

            <div className="field-group">
              <Label htmlFor="descripcion">Descripción breve *</Label>
              <Textarea
                id="descripcion"
                rows={2}
                value={formData.descripcion}
                onChange={handleInputChange("descripcion")}
                required
                placeholder="Describe en 1-2 frases tu proyecto..."
              />
            </div>

            <div className="field-group">
              <Label htmlFor="descripcion_proyecto">
                Descripción detallada *
              </Label>
              <Textarea
                id="descripcion_proyecto"
                rows={5}
                value={formData.descripcion_proyecto}
                onChange={handleInputChange("descripcion_proyecto")}
                required
                placeholder="Explica tu proyecto, idea o tesis en detalle..."
              />
            </div>

            <div className="field-group">
              <Label>Área del proyecto *</Label>
              <RadioGroup
                value={selectedArea}
                onValueChange={handleAreaChange}
                className="radio-grid"
              >
                {["Tecnología", "Sostenibilidad", "Servicios", "Salud"].map(
                  (area) => (
                    <label key={area} className="radio-card">
                      <RadioGroupItem value={area} id={`area-${area}`} />
                      <span>{area}</span>
                    </label>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="field-group">
              <Label>Etapa del proyecto *</Label>
              <Select
                value={formData.etapa_proyecto}
                onValueChange={(val) =>
                  setFormData({ ...formData, etapa_proyecto: val })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="select-content">
                  <SelectItem value="Idea inicial">Idea inicial</SelectItem>
                  <SelectItem value="Concepto desarrollado">
                    Concepto desarrollado
                  </SelectItem>
                  <SelectItem value="Prototipo">Prototipo</SelectItem>
                  <SelectItem value="En crecimiento">En crecimiento</SelectItem>
                  <SelectItem value="MVP">MVP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="field-group">
              <Label>Imágenes del proyecto</Label>
              <label
                htmlFor="image-upload"
                className="upload-box custom-upload"
              >
                <Upload className="upload-icon" />
                <span className="upload-text">Seleccionar imágenes</span>
                <span className="upload-note">
                  Puedes subir varias imágenes
                </span>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={async (e) => {
                  const files = Array.from(e.target.files);
                  const urls = [];

                  for (const file of files) {
                    const url = await subirImagenACloudinary(file);
                    urls.push(url);
                  }

                  setFormData((prev) => ({
                    ...prev,
                    fotos: [...prev.fotos, ...urls],
                  }));
                }}
              />
              <div className="preview-gallery">
                {formData.fotos.map((foto, idx) => (
                  <div className="preview-image-wrapper" key={idx}>
                    <img
                      src={foto}
                      alt={`foto-${idx}`}
                      className="preview-image"
                    />
                    <button
                      className="remove-image-btn"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          fotos: prev.fotos.filter((_, i) => i !== idx),
                        }))
                      }
                    >
                      <X className="remove-icon" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="field-group">
              <Label>Habilidades requeridas *</Label>
              <div className="skills-grid">
                {allSkills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <Checkbox
                      id={skill}
                      checked={formData.socios_buscados.includes(skill)}
                      onCheckedChange={() => toggleSocio(skill)}
                    />
                    <Label htmlFor={skill}>{skill}</Label>
                  </div>
                ))}
              </div>
              <Label className="mt-3" htmlFor="otra_habilidad">
                Otra habilidad...
              </Label>
              <Input
                id="otra_habilidad"
                value={formData.otra_habilidad}
                onChange={handleInputChange("otra_habilidad")}
                placeholder="Ej: Biología, Blockchain..."
              />
            </div>

            <div className="field-group">
              <Label htmlFor="contacto">Información de contacto *</Label>
              <Input
                id="contacto"
                value={formData.contacto}
                onChange={handleInputChange("contacto")}
                required
                placeholder="Correo, LinkedIn, etc."
              />
            </div>

            <div className="terms-box">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={setTermsAccepted}
              />
              <Label htmlFor="terms">
                Acepto los <Link to="/terms">Términos</Link> y la{" "}
                <Link to="/privacy">Política de privacidad</Link> *
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} disabled={store.loading}>
              {store.loading ? "Publicando..." : "Publicar proyecto"}
              <Check className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
