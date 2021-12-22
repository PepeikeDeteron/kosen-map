import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Home404 from '.';

export default {
  title: 'components/templates/Home404',
  components: Home404,
} as Meta;

const Template: Story<ComponentProps<typeof Home404>> = (props) => (
  <Home404 {...props} />
);

export const Default = Template.bind({});
Default.args = {};
