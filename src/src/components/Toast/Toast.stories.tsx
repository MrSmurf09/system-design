import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Toast } from "./index";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
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
    message: "Operacion completada correctamente.",
    severity: "success",
    autoHideDuration: 6000,
    onClose: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {};

export const Error: Story = {
  args: {
    severity: "error",
    message: "No fue posible completar la operacion.",
  },
};
