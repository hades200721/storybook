import type {Meta, StoryObj} from '@storybook/react';
import {Spinner} from '../../../components/spinner';

const meta = {
  title: 'Atoms/Spinner',
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
    color: 'red',
  },
};
