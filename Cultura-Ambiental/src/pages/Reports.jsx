import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button, MenuItem } from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";
import EventosImage from "../assets/Mapa-Poli.png"; 

const ReporteResiduo = () => {
  const [zona, setZona] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [archivo, setArchivo] = useState(null);

  const zonas = [
    "P31", "P13", "P15", "P17", "P19", "P34", "P36", "P38", "P40",
    "P42", "P44", "P55", "P56", "P57", "P58", "P59", "Cancha de Futbol",
    "Aero", "Junin", "Palestina", "Almendros", "Palmas"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ zona, descripcion, archivo });
    // Aquí luego conectarías con tu backend o guardarlo en la base de datos
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
            {/* Selector de Zonas */}
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

            {/* Campo de descripción */}
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

            {/* Campo de subir archivos */}
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

            {/* Botón de enviar */}
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

          {/* Mapa */}
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#2E7D32" }}>
              Ubicación de las Zonas
            </Typography>
            {/* Imagen decorativa */}
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