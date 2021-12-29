import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Spinner from '.';

export default {
  title: 'components/molecules/Spinner',
  components: Spinner,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Spinner>> = (props) => (
  <Spinner {...props} />
);

export const Default = Template.bind({});
Default.args = {
  color: '#90A4AE',
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  color: '#90A4AE',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  color: '#90A4AE',
  size: 'large',
};

export const Primary = Template.bind({});
Primary.args = {
  color: '#4DD0E1',
  size: 'default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: '#81C784',
  size: 'default',
};
