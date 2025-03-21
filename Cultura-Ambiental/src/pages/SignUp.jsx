import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import AppTheme from "../shared-theme/AppTheme";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  return (
    <AppTheme>
      <Box
        sx={{
          height: "100vh", // Ajuste para evitar scroll
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)", // Degradado verde a blanco
          textAlign: "center",
          padding: 2,
        }}
      >
        <Container maxWidth="xs">
          {/* ECO-POLI Título */}
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#006400", // Verde oscuro
              textShadow: "2px 2px 4px white, -2px -2px 4px white" // Borde blanco
            }}
          >
            ECO-POLI
          </Typography>

          {/* Formulario */}
          <Box component="form" sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              bgcolor: "white",
              textAlign: "center",
            }}>
            <Typography variant="h4" gutterBottom>
              Crear una cuenta
            </Typography>
            <TextField
              fullWidth
              label="Nombre de usuario"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Correo Electrónico"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              label="Confirmar Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <TextField
              select
              fullWidth
              label="Tipo de usuario"
              variant="outlined"
              margin="normal"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <MenuItem value="Estudiante">Estudiante</MenuItem>
              <MenuItem value="Docente">Docente</MenuItem>
              <MenuItem value="Personal de limpieza">Personal de limpieza</MenuItem>
            </TextField>

            {/* Botón Registrarse */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#4CAF50", // Verde claro
                color: "white",
                "&:hover": { backgroundColor: "#45a049" }, // Verde más oscuro en hover
              }}
            >
              Registrarse
            </Button>

            {/* Enlace para iniciar sesión */}
            <Typography sx={{ mt: 2 }}>
              <Link to="/" style={{ color: "#2E7D32", fontWeight: "bold" }}>
                ¿Ya estás registrado?
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </AppTheme>
  );
};

export default SignUp;

