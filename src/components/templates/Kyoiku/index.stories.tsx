import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Kyoiku from '.';

export default {
  title: 'components/templates/Kyoiku',
  components: Kyoiku,
  argTypes: {},
} as Meta;

const Template: Story<ComponentProps<typeof Kyoiku>> = (props) => (
  <Kyoiku {...props} />
);

export const Default = Template.bind({});
Default.args = {};
