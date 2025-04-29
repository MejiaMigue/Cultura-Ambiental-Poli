import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <AppTheme>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)",
        }}
      >
        {/* Header */}
        <Box sx={{ position: "relative", textAlign: "center", mt: 4 }}>
          {/* Botón de configuración en la esquina superior derecha */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              m: 2,
            }}
          >
            <Button
              component={RouterLink}
              to="/userconfig"
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              Configurar Perfil
            </Button>
          </Box>

          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "4rem",
              color: "#006400",
              textShadow: "2px 2px 4px white, -2px -2px 4px white",
            }}
          >
            ECO-POLI
          </Typography>

          <Typography variant="h5" sx={{ mt: 2, mb: 4, mx: 2 }}>
            Proyecto de Cultura Ambiental en el Politécnico Jaime Isaza Cadavid. Fomentamos el reciclaje, la educación ambiental y el cuidado del campus.
          </Typography>

          {/* Botones de sesión */}
          <Box sx={{ mb: 4 }}>
            <Button
              component={RouterLink}
              to="/"
              variant="contained"
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                mr: 2,
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              Iniciar Sesión
            </Button>
            <Button
              component={RouterLink}
              to="/signup"
              variant="contained"
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              Crear Cuenta
            </Button>
          </Box>
        </Box>

        {/* Opciones principales */}
        <Container sx={{ flexGrow: 1, mb: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: "white",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Formulario de Reportes
                </Typography>
                <Button
                  component={RouterLink}
                  to="/reports"
                  variant="contained"
                  sx={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    mt: 2,
                    "&:hover": { backgroundColor: "#45a049" },
                  }}
                >
                  Reportar
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: "white",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Materiales Educativos
                </Typography>
                <Button
                  component={RouterLink}
                  to="/materials"
                  variant="contained"
                  sx={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    mt: 2,
                    "&:hover": { backgroundColor: "#45a049" },
                  }}
                >
                  Ver Material
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: "white",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Nuestros Eventos
                </Typography>
                <Button
                  component={RouterLink}
                  to="/events"
                  variant="contained"
                  sx={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    mt: 2,
                    "&:hover": { backgroundColor: "#45a049" },
                  }}
                >
                  Ver Eventos
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <Box sx={{ py: 3, textAlign: "center", bgcolor: "#2E7D32", color: "white" }}>
          <Typography variant="body2">
            © 2025 Eco-Poli | Proyecto de Cultura Ambiental - Politécnico Jaime Isaza Cadavid
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Contacto: culturaambiental@elpoli.edu.co
          </Typography>
        </Box>
      </Box>
    </AppTheme>
  );
};

export default Home;

