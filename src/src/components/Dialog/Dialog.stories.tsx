import type { Meta, StoryObj } from "@storybook/react-vite";

import MyDialog from "./index";
import { fn } from "storybook/test";

const meta: Meta<typeof MyDialog> = {
  title: "Components/Dialog",
  component: MyDialog,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "350px",
          position: "relative",
          border: "1px dashed #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => <MyDialog {...args} />,
  parameters: {
    docs: {
      source: {
        type: "dynamic",
        language: "tsx",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["info", "delete", "form", "success", "error"],
    },
    children: { control: "text" },
  },
  args: {
    isOpen: true,
    onClose: fn(),
    onConfirm: fn(),
    title: "Confirmar acción",
    type: "info",
    cancelLabel: "Cancelar",
    confirmLabel: "Aceptar",
    children: "Estas seguro de continuar con este proceso?",
    // --- LÍNEAS PARA QUE SE VEA Y NO SE BLOQUEE ---
    // @ts-ignore
    disablePortal: true,
    // @ts-ignore
    disableScrollLock: true,
    // @ts-ignore
    disableEnforceFocus: true,
    // @ts-ignore
    hideBackdrop: true, // Esto es vital para poder dar clic al botón de "Show Code"
  },
};

export default meta;
type Story = StoryObj<typeof MyDialog>;

export const Info: Story = {
  args: {
    type: "info",
  },
};

export const Delete: Story = {
  args: {
    type: "delete",
    title: "Eliminar registro",
    children: "Esta acción no se puede deshacer.",
  },
};
