import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";
import EventosImage from "../assets/Mapa-Poli.png";

const ReporteResiduo = () => {
  const [zona, setZona] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [archivo, setArchivo] = useState(null);

  const zonas = [
    "P31", "P13", "P15", "P17", "P19", "P34", "P36", "P38", "P40",
    "P42", "P44", "P55", "P56", "P57", "P58", "P59", "Cancha de Futbol",
    "Aero", "Junin", "Palestina", "Almendros", "Palmas",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const userId = 10; // Reemplaza esto con el ID real si lo guardaste en localStorage

    formData.append("userId", userId);
    formData.append("title", zona);
    formData.append("description", descripcion);
    formData.append("date", new Date().toISOString().split("T")[0]); // yyyy-mm-dd
    formData.append("type", "Residuo");
    formData.append("companyContactNumber", "N/A");
    formData.append("urgency", "Media");
    formData.append("attachment", archivo?.name || "evidencia.jpg");
    formData.append("id_event", 1);

    try {
      const token = localStorage.getItem("token"); // Asegúrate de que el token esté guardado

      const response = await fetch("https://proyecto-integrador-backend-v0zr.onrender.com/api/1.0/reportes", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Importante: no pongas 'Content-Type', fetch lo hace por vos cuando es FormData
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al enviar el reporte");
      }

      const data = await response.json();
      console.log("Reporte enviado:", data);
      alert("Reporte enviado con éxito");
      setZona("");
      setDescripcion("");
      setArchivo(null);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el reporte");
    }
  };

  return (
    <AppTheme>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#006400",
              textShadow: "2px 2px 4px white, -2px -2px 4px white",
              mb: 4,
            }}
          >
            Reportar Residuo
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              bgcolor: "white",
            }}
          >
            <TextField
              select
              fullWidth
              label="Zona de la Universidad"
              variant="outlined"
              margin="normal"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
              required
            >
              {zonas.map((zona) => (
                <MenuItem key={zona} value={zona}>
                  {zona}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Descripción del Residuo"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />

            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#4CAF50",
                color: "white",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              Subir Evidencia (Foto o Video)
              <input
                type="file"
                accept="image/*,video/*"
                hidden
                onChange={(e) => setArchivo(e.target.files[0])}
              />
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: "#2E7D32",
                color: "white",
                "&:hover": { backgroundColor: "#1b5e20" },
              }}
            >
              Enviar Reporte
            </Button>
          </Box>

          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#2E7D32" }}>
              Ubicación de las Zonas
            </Typography>
            <Box
              component="img"
              src={EventosImage}
              alt="Eventos Ambientales"
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 2,
                mb: 4,
              }}
            />
          </Box>
        </Container>
      </Box>
    </AppTheme>
  );
};

export default ReporteResiduo;
