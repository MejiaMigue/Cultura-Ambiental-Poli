import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppTheme from "../shared-theme/AppTheme";
import EventosImage from "../assets/Eventos.png"; // Asegúrate de que esté en /src/assets/

const Eventos = () => {
  return (
    <AppTheme>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)",
          py: 4,
        }}
      >
        <Container maxWidth="md">
          {/* Título principal */}
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{
              fontWeight: "bold",
              color: "#006400",
              textShadow: "2px 2px 4px white, -2px -2px 4px white",
            }}
          >
            Nuestros Eventos
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

          {/* Descripción del propósito */}
          <Typography variant="h5" gutterBottom align="center" fontWeight="bold">
            ¡Juntos hacemos del Poli un campus más verde y responsable!
          </Typography>
          <Typography variant="body1" paragraph align="center">
            En nuestros eventos ambientales podrás aprender, participar en actividades prácticas de reciclaje y ayudar a construir una universidad más sostenible. <br />
            <strong>¡Cada acción cuenta para cuidar nuestro planeta!</strong>
          </Typography>

          {/* Evento destacado */}
          <Box
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              bgcolor: "#f0fdf4",
              borderLeft: "6px solid #2E7D32",
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              🏆 Reto EcoCampeones
            </Typography>
            <Typography variant="body1" gutterBottom>
              ¡Recicla y gana! Acumula puntos enviando reportes y recibe premios ecológicos.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              🗓️ Todo el semestre
            </Typography>

            <Button
              variant="contained"
              component={Link}
              to="/reportes"
              sx={{
                mt: 2,
                backgroundColor: "#4CAF50",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              Haz clic aquí para participar
            </Button>
          </Box>
        </Container>
      </Box>
    </AppTheme>
  );
};

export default Eventos;
