import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import MapDisplay from '.';

export default {
  title: 'components/molecules/MapDisplay',
  components: MapDisplay,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof MapDisplay>> = (props) => (
  <MapDisplay {...props} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'ここに地図を表示',
};
