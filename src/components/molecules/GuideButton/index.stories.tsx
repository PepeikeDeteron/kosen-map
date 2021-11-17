import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import GuideButton from '.'

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
}
