import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <AppTheme>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)", // Degradado verde a blanco
        }}
      >
        <Container maxWidth="xs">
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
        ECO-POLI
        </Typography>
          <Box
            sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              bgcolor: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Recuperar Contraseña
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={2}>
              Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
            </Typography>
            <TextField
              fullWidth
              label="Correo Electrónico"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
            variant="contained" 
            fullWidth 
            sx={{ 
                mt: 2, 
                backgroundColor: "#4CAF50", // Verde claro
                color: "white", // Texto en blanco
                "&:hover": { backgroundColor: "#45a049" } // Un verde un poco más oscuro al pasar el mouse
            }}
            >
            Enviar Instrucciones
            </Button>
              {/* Enlace para iniciar sesión */}
            <Typography sx={{ mt: 2 }}>
              <Link to="/" style={{ color: "#2E7D32", fontWeight: "bold" }}>
               Volver
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </AppTheme>
  );
};

export default ForgotPassword;

