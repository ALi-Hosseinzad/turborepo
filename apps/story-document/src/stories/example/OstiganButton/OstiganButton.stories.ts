import type { Meta, StoryObj } from '@storybook/react'
import { OstiganButton } from './OstiganButton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'OstiganButton',
  component: OstiganButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof OstiganButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Ostigan Button Primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Ostigan Button Secondary',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'OstiganButton',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'OstiganButton',
  },
}

export const Largex: Story = {
  args: {
    size: 'largex',
    label: 'OstiganButton',
  },
}
