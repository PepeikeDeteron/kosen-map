import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import Senkoka from '.'

export default {
  title: 'components/templates/Senkoka',
  components: Senkoka,
  argTypes: {},
} as Meta

const Template: Story<ComponentProps<typeof Senkoka>> = (props) => (
  <Senkoka {...props} />
)

export const Default = Template.bind({})
Default.args = {}
