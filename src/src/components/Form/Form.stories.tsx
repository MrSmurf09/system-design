import type { Meta, StoryObj } from "@storybook/react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Form } from "./index";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 4,
          backgroundColor: "#fafafa",
          minHeight: "60vh",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "700px" }}>
          <Story />
        </Box>
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const ComplexForm: Story = {
  args: {
    onSubmit: (data) => console.log("Data enviada:", data),
    children: (
      <>
        <Typography
          variant="h5"
          sx={{ gridColumn: "span 2", mb: 1, fontWeight: 700 }}
        >
          Información del Perfil
        </Typography>
        <TextField label="Nombre" name="firstName" fullWidth />
        <TextField label="Apellido" name="lastName" fullWidth />
        <TextField
          label="Email"
          name="email"
          fullWidth
          sx={{ gridColumn: "span 2" }}
        />
        <TextField label="Ciudad" name="city" fullWidth />
        <TextField label="País" name="country" fullWidth />

        <Button type="submit" variant="contained" size="large">
          Guardar Cambios
        </Button>
      </>
    ),
  },
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
};
