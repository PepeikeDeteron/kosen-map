import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import SwitchButton from '.'

export default {
  title: 'components/molecules/SwitchButton',
  components: SwitchButton,
  argTypes: {
    color: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof SwitchButton>> = (props) => (
  <SwitchButton {...props} />
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
