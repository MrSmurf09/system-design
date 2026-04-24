import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { fn } from "storybook/test";
import Sidebar from "./index";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/facturas"]}>
        <div style={{ height: "100vh" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    open: true,
    toggleDrawer: fn(),
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        type: "code",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Expanded: Story = {};

export const Collapsed: Story = {
  args: {
    open: false,
  },
};
