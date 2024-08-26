import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ButtonGroup} from '../../../components/molecules/buttonGroup';

const meta = {
  title: 'molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClickCallback: fn()
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Warning: Story = {
  args: {
    items: ['Delete now', 'working on it', 'last change'],
  }
};
