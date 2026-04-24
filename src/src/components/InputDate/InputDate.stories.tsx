import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import InputDate from "./index";

const meta: Meta<typeof InputDate> = {
  title: "Components/InputDate",
  component: InputDate,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputDate>;

export const Default: Story = {
  args: {
    label: "Fecha de vencimiento",
    value: new Date("2026-04-23"),
    onChange: fn(),
    required: false,
    disabled: false,
    error: false,
    helperText: "",
    fullWidth: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Fecha de emision",
    value: null,
    onChange: fn(),
    error: true,
    helperText: "Debe seleccionar una fecha valida",
  },
};
