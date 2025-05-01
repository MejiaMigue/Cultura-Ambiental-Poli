import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AppTheme from "../shared-theme/AppTheme";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate(); // Para redireccionar

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("https://proyecto-integrador-backend-v0zr.onrender.com/api/1.0/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          userType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      const data = await response.json();

      // Guardar el token y el usuario en localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Registro exitoso");

      // Redireccionar al login o a la vista principal
      navigate("/signin"); // cambia esto según tu ruta
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <AppTheme>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)",
          textAlign: "center",
          padding: 2,
        }}
      >
        <Container maxWidth="xs">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#006400",
              textShadow: "2px 2px 4px white, -2px -2px 4px white",
            }}
          >
            ECO-POLI
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              bgcolor: "white",
              textAlign: "center",
            }}
          >
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
              <MenuItem value="Personal de limpieza">
                Personal de limpieza
              </MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#4CAF50",
                color: "white",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              Registrarse
            </Button>

            <Typography sx={{ mt: 2 }}>
              <Link to="/signin" style={{ color: "#2E7D32", fontWeight: "bold" }}>
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


