import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import StairsButton from '.';

export default {
  title: 'components/molecules/StairsButton',
  components: StairsButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof StairsButton>> = (props) => (
  <StairsButton {...props} />
);

export const Default = Template.bind({});
Default.args = {};
