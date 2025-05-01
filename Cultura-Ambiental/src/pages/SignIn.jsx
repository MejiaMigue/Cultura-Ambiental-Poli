import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AppTheme from "../shared-theme/AppTheme";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Para redirigir después de iniciar sesión

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://proyecto-integrador-backend-v0zr.onrender.com/api/1.0/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Guarda el token
        localStorage.setItem("user", JSON.stringify(data)); // Guarda el usuario completo
        console.log("Login exitoso", data);
        navigate("/"); // Redirige a otra página (ajusta la ruta si es necesario)
      } else {
        const errorData = await response.json();
        console.error("Error en login:", errorData);
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Ocurrió un error al iniciar sesión.");
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
              textShadow: "2px 2px 4px white, -2px -2px 4px white"
            }}
          >
            ECO-POLI
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "white",
            textAlign: "center",
          }}>
            <Typography variant="h4" gutterBottom>
              Iniciar Sesión
            </Typography>
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
              Iniciar Sesión
            </Button>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ mt: 2 }}>
                <Link to="/ForgotPassword" style={{ color: "#2E7D32", fontWeight: "bold" }}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </Typography>
              <Typography sx={{ mt: 2 }}>
                ¿No tienes cuenta?{" "}
                <Link to="/signup" style={{ color: "#2E7D32", fontWeight: "bold" }}>
                  Regístrate aquí
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </AppTheme>
  );
};

export default SignIn;

