import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import Kanri from '.'

export default {
  title: 'components/template/Kanri',
  components: Kanri,
  argTypes: {},
} as Meta

const Template: Story<ComponentProps<typeof Kanri>> = (props) => (
  <Kanri {...props} />
)

export const Default = Template.bind({})
Default.args = {}
