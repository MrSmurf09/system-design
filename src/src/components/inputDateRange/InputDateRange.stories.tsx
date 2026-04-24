import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import InputDateRange from "./index";
import type { DateRange } from "../../../../../../packages/shared-types/dist";

const meta: Meta<typeof InputDateRange> = {
  title: "Components/InputDateRange",
  component: InputDateRange,
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
type Story = StoryObj<typeof InputDateRange>;

export const Default: Story = {
  args: {
    label: "Rango de emision",
    value: {
      start: new Date("2026-04-01"),
      end: new Date("2026-04-23"),
    } as DateRange,
    onChange: fn(),
    required: false,
    disabled: false,
    error: false,
    helperText: "",
  },
};

export const WithError: Story = {
  args: {
    label: "Rango requerido",
    value: {
      start: new Date(),
      end: null,
    } as DateRange,
    onChange: fn(),
    error: true,
    helperText: "Selecciona fecha inicial y final",
  },
};
