import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import HomeButton from '.';

export default {
  title: 'components/molecules/HomeButton',
  components: HomeButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof HomeButton>> = (props) => (
  <HomeButton {...props} />
);

export const Default = Template.bind({});
Default.args = {};
