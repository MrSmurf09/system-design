import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import EmptyState from "./index";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
  args: {
    title: "No hay resultados",
    description: "No encontramos datos para los filtros aplicados.",
    iconName: "search",
    actionLabel: "Limpiar filtros",
    actionId: "clear-filters",
    onAction: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Search: Story = {};

export const Settings: Story = {
  args: {
    title: "Configuracion no disponible",
    description: "Aun no hay informacion para esta seccion.",
    iconName: "settings",
    actionLabel: "Volver al inicio",
  },
};
