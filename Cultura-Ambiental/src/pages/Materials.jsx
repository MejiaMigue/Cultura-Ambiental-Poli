import React from "react";
import { Box, Typography, Container, Paper, Button } from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";

import Img1 from "../assets/Material1.png";
import Img2 from "../assets/Material2.png";
import Img3 from "../assets/Material3.png";
import Img4 from "../assets/Material4.png";
import Img5 from "../assets/Material5.png";

const Section = ({ children }) => (
  <Paper
    elevation={3}
    sx={{
      backgroundColor: "#f4fef4",
      borderLeft: "6px solid #2E7D32",
      p: 3,
      my: 4,
      borderRadius: 2,
    }}
  >
    {children}
  </Paper>
);

const StyledImage = ({ src, alt }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    width="100%"
    sx={{ borderRadius: 2, boxShadow: 3, my: 3 }}
  />
);

const Materials = () => {
  return (
    <AppTheme>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Container maxWidth="md">
           <Typography
                   variant="h1"
                   gutterBottom
                   sx={{
                       textAlign: "center",
                       fontWeight: "bold",
                       fontSize: "4rem", // Ajusta el tamaño según lo necesites
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       height: "10vh",
                       color: "#006400", // Verde oscuro
               textShadow: "2px 2px 4px white, -2px -2px 4px white" // Borde blanco
                   }}
                   >
                   Guía De Reciclaje
                   </Typography>
          <Section>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              ¿Por qué reciclar?
            </Typography>
            <Typography>
              Reciclar ayuda a reducir la contaminación, ahorrar recursos naturales y crear un campus más limpio y sostenible. Cada pequeño esfuerzo suma al cuidado de nuestro planeta.
            </Typography>
            <StyledImage src={Img1} alt="Guía de reciclaje" />
          </Section>

          <Section>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Principios básicos del reciclaje ♻️
            </Typography>
            <Typography>
              <strong>Reducir:</strong> Disminuye la cantidad de residuos que generas.<br />
              <strong>Reutilizar:</strong> Antes de desechar, piensa si puedes darle un nuevo uso a los objetos.<br />
              <strong>Reciclar:</strong> Separa correctamente los residuos para que puedan ser transformados y reutilizados.
            </Typography>
            <StyledImage src={Img2} alt="Principios del reciclaje" />
          </Section>

          <Section>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              ¿Cómo separamos los residuos?
            </Typography>
            <StyledImage src={Img3} alt="Separación de residuos" />
            <Typography>
              ⚪ <strong>RESIDUOS APROVECHABLES (Caneca blanca):</strong> Papel limpio, cartón, botellas plásticas, latas de aluminio, vidrio, metales.<br />
              🟢 <strong>RESIDUOS ORGÁNICOS (Caneca verde):</strong> Restos de comida, cáscaras, hojas y ramas.<br />
              ⚫ <strong>RESIDUOS NO APROVECHABLES (Caneca gris o negra):</strong> Papel sucio, envases con grasa, residuos sanitarios.
            </Typography>
            <Typography mt={2}>
              <strong>¿Qué NO debemos reciclar?</strong><br />
              🚫 Papel sanitario<br />
              🚫 Vasos y platos de icopor<br />
              🚫 Papel o cartón con grasa<br />
              🚫 Desechos de alimentos mezclados<br />
              🚫 Empaques metalizados (envolturas de papas)
            </Typography>
            <StyledImage src={Img4} alt="Qué no reciclar" />
          </Section>

          <Section>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Tips prácticos para reciclar mejor 📝
            </Typography>
            <Typography>
              ✅ Limpia los residuos reciclables: sin restos de comida o líquidos.<br />
              ✅ Aplasta botellas y cajas: ahorra espacio.<br />
              ✅ No recicles objetos sucios: contaminan el resto.<br />
              ✅ Usa los puntos adecuados: canecas señalizadas en el Poli.
            </Typography>
            <Typography mt={2}>
              🌱 <strong>Aprende más y participa:</strong><br />
              - Asiste a nuestras charlas de educación ambiental.<br />
              - Participa en jornadas de reciclaje.<br />
              - Súmate a nuestros eventos medioambientales.
            </Typography>
            <StyledImage src={Img5} alt="Educación ambiental en el Poli" />
          </Section>

          <Box textAlign="center" mt={6}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              ¡Con tu participación hacemos del Poli un lugar más verde y responsable!
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#"
              sx={{ backgroundColor: "#2E7D32", ":hover": { backgroundColor: "#1b5e20" } }}
            >
              👉 ¡Dame click!
            </Button>
          </Box>
        </Container>
      </Box>
    </AppTheme>
  );
};

export default Materials;
