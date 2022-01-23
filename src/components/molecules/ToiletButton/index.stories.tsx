import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import ToiletButton from '.';

export default {
  title: 'components/molecules/ToiletButton',
  components: ToiletButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof ToiletButton>> = (props) => (
  <ToiletButton {...props} />
);

export const Default = Template.bind({});
Default.args = {};
