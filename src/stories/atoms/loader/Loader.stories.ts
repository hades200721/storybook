import type {Meta, StoryObj} from '@storybook/react';
import {Loader} from '../../../components/loader';

const meta = {
  title: 'Atoms/Spinner',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    duration: {
      control: {
        type: 'number',
        min: 0.1,
        max: 100,
        step: 0.1,
      },
    },
  }
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {
    color: '#333',
    duration: 0.8,
    type: 'spinner',
  },
};

export const SpinningBubbles: Story = {
  args: {
    size: 40,
    type: 'spinningBubbles',
  },
};

export const Spokes: Story = {
  args: {
    color: '#333',
    duration: 0.8,
    size: 40,
    type: 'spokes',
  },
};
