import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import EntranceButton from '.';

export default {
  title: 'components/molecules/EntranceButton',
  components: EntranceButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof EntranceButton>> = (props) => (
  <EntranceButton {...props} />
);

export const Default = Template.bind({});
Default.args = {};
