import type { Meta, StoryObj } from "@storybook/react-vite";
import AddOptionModal from "./index";
import { Box, GlobalStyles, Button } from "@mui/material";
import { fn } from "storybook/test";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof AddOptionModal> = {
  title: "Components/AddOptionModal",
  component: AddOptionModal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box
        id="modal-viewport"
        sx={{
          height: "450px",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <GlobalStyles
          styles={{
            // Ajustes para que la modal sea interna y no bloquee el "Show Code"
            ".MuiModal-root": {
              position: "absolute !important",
              pointerEvents: "none",
            },
            ".MuiBackdrop-root": {
              position: "absolute !important",
              backgroundColor: "transparent !important", // Fondo transparente para poder clicar lo de atrás
              pointerEvents: "none",
            },
            // Aseguramos que el contenido de la modal sí reciba clics
            "#modal-viewport > div": {
              pointerEvents: "auto",
            },
          }}
        />
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddOptionModal>;

export const Default: Story = {
  args: {
    open: true,
    title: "Nuevo cliente",
    initialValue: "",
    onClose: fn(),
    onSave: fn(),
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs<{ open: boolean }>();

    const handleClose = () => {
      updateArgs({ open: false });
      args.onClose();
    };

    return (
      <Box>
        {!open && (
          <Button
            variant="contained"
            onClick={() => updateArgs({ open: true })}
          >
            Abrir Modal
          </Button>
        )}

        <AddOptionModal
          {...args}
          open={open}
          onClose={handleClose}
          disablePortal
          container={() => document.getElementById("modal-viewport")}
        />
      </Box>
    );
  },
};
