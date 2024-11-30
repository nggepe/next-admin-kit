import type { Meta, StoryObj } from "@storybook/react";

import CustomCard from "./CustomCard";

const meta = {
  component: CustomCard
} satisfies Meta<typeof CustomCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
