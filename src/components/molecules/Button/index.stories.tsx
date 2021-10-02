import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import Button from '.'

export default {
  title: 'components/molecules/Button',
  components: Button,
  argTypes: {
    color: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof Button>> = (props) => (
  <Button {...props} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'secondary',
}
