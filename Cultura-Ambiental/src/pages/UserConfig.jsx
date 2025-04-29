import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Divider,
} from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";

const UserSettings = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Aquí podrías conectar con tu backend para guardar cambios
    console.log("Guardando datos:", userData);
  };

  return (
    <AppTheme>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #2E7D32, #FFFFFF)",
          py: 6,
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 3,
              p: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{ mb: 3, fontWeight: "bold", color: "#2E7D32" }}
            >
              Configuración de Perfil
            </Typography>

            {/* Información Personal */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Información personal
            </Typography>

            <TextField
              label="Nombre completo"
              name="name"
              fullWidth
              margin="normal"
              value={userData.name}
              onChange={handleChange}
            />

            <TextField
              label="Correo electrónico"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={userData.email}
              onChange={handleChange}
            />

            <TextField
              select
              label="Tipo de usuario"
              name="role"
              fullWidth
              margin="normal"
              value={userData.role}
              onChange={handleChange}
            >
              <MenuItem value="Estudiante">Estudiante</MenuItem>
              <MenuItem value="Docente">Docente</MenuItem>
              <MenuItem value="Personal de limpieza">Personal de limpieza</MenuItem>
            </TextField>

            <Divider sx={{ my: 4 }} />

            {/* Cambiar contraseña */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Cambiar contraseña
            </Typography>

            <TextField
              label="Contraseña actual"
              name="currentPassword"
              type="password"
              fullWidth
              margin="normal"
              value={userData.currentPassword}
              onChange={handleChange}
            />

            <TextField
              label="Nueva contraseña"
              name="newPassword"
              type="password"
              fullWidth
              margin="normal"
              value={userData.newPassword}
              onChange={handleChange}
            />

            <TextField
              label="Confirmar nueva contraseña"
              name="confirmPassword"
              type="password"
              fullWidth
              margin="normal"
              value={userData.confirmPassword}
              onChange={handleChange}
            />

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  "&:hover": { backgroundColor: "#45a049" },
                }}
                onClick={handleSave}
              >
                Guardar Cambios
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </AppTheme>
  );
};

export default UserSettings;
