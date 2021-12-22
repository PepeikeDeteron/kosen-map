import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Home from '.';

export default {
  title: 'components/templates/Home',
  components: Home,
  argTypes: {},
} as Meta;

const Template: Story<ComponentProps<typeof Home>> = (props) => (
  <Home {...props} />
);

export const Default = Template.bind({});
Default.args = {};
