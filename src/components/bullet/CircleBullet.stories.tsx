import type { Meta, StoryObj } from "@storybook/react";

import CircleBullet from "@/components/bullet/CircleBullet";
import "@radix-ui/themes/styles.css";
import "@/core/styles/radixTheme.css";

const meta = {
  component: CircleBullet,
  decorators: [(Story) => <Story />]
} satisfies Meta<typeof CircleBullet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "rgb(239,104,21)"
  }
};
