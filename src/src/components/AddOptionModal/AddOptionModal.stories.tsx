import type { Meta, StoryObj } from "@storybook/react-vite";
import AddOptionModal from "./index";
import { Box, GlobalStyles } from "@mui/material"; // Importamos GlobalStyles
import { fn } from "storybook/test";

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
          transform: "translateZ(0)",
        }}
      >
        <GlobalStyles
          styles={{
            ".docs-story button": {
              zIndex: "9999 !important",
              position: "relative",
            },
            // Forzamos a la modal a no salirse de nuestro recuadro
            ".MuiDialog-root, .MuiModal-root": {
              position: "absolute !important",
            },
            ".MuiBackdrop-root": {
              position: "absolute !important",
            },
          }}
        />
        <Story />
      </Box>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: `
<AddOptionModal
  open={true}
  title="Nuevo cliente"
  initialValue=""
  onClose={() => {}}
  onSave={(name) => console.log(name)}
/>`,
        language: "tsx",
        type: "code",
      },
    },
  },
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
  render: (args) => (
    <AddOptionModal
      {...args}
      // @ts-ignore
      disablePortal
      // @ts-ignore
      container={() => document.getElementById("modal-viewport")}
      sx={{
        position: "absolute",
        zIndex: 1,
      }}
    />
  ),
};

export const WithInitialValue: Story = {
  ...Default,
  args: {
    ...Default.args,
    initialValue: "Cliente sugerido",
  },
};
