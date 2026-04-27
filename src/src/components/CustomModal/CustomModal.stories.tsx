import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box, GlobalStyles, Button as MuiButton } from "@mui/material";

import CustomModal from "./index";
import Button from "../Button";
import { fn } from "storybook/test";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof CustomModal> = {
  title: "Components/CustomModal",
  component: CustomModal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box
        id="modal-container-viewport"
        sx={{
          height: "500px",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          contain: "content",
        }}
      >
        <GlobalStyles
          styles={{
            ".MuiModal-root": {
              position: "absolute !important",
              pointerEvents: "none",
            },
            ".MuiBackdrop-root": {
              position: "absolute !important",
              backgroundColor: "rgba(0,0,0,0.1) !important",
              pointerEvents: "none",
            },
            ".MuiModal-root > div": {
              pointerEvents: "auto",
            },

            body: {
              paddingRight: "0px !important",
              overflow: "auto !important",
            },
          }}
        />
        <Story />
      </Box>
    ),
  ],
  args: {
    open: true,
    onClose: fn(),
    title: "Crear Nuevo Registro",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof CustomModal>;

export const Default: Story = {
  args: {
    children: <p>Contenido del modal para previsualizacion en Storybook.</p>,
    footer: (
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button label="Cancelar" onClick={fn()} />
        <Button label="Guardar" onClick={fn()} />
      </Box>
    ),
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    const handleClose = () => {
      updateArgs({ open: false });
      args.onClose();
    };

    return (
      <Box>
        {!open && (
          <MuiButton
            variant="contained"
            onClick={() => updateArgs({ open: true })}
          >
            Abrir Modal
          </MuiButton>
        )}
        <CustomModal
          {...args}
          open={open}
          onClose={handleClose}
          disablePortal={true}
          container={() => document.getElementById("modal-container-viewport")}
        />
      </Box>
    );
  },
};
