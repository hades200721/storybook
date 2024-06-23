import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../../../components/spinner';

const meta = {
  title: 'Atoms/Button',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    size: 20,
  },
};

export const Large: Story = {
  args: {
    size: 40,
  },
};
