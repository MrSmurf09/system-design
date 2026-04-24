import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import CustomModal from "./index";
import Button from "../Button";

const meta: Meta<typeof CustomModal> = {
  title: "Components/CustomModal",
  component: CustomModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
  args: {
    open: true,
    onClose: fn(),
    title: "Crear Nuevo Registro",
    size: "md",
    children: <p>Contenido del modal para previsualizacion en Storybook.</p>,
    footer: (
      <>
        <Button label="Cancelar" onClick={fn()} />
        <Button label="Guardar" onClick={fn()} />
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof CustomModal>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
