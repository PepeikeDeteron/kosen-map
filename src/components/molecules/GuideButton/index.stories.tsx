import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import GuideButton from '.'
import { Button } from '@mui/material'

export default {
  title: 'components/molecules/GuideButton',
  components: GuideButton,
  argTypes: {
    color: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof GuideButton>> = (props) => (
  <GuideButton {...props} />
)

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  buttons: [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ],
}
