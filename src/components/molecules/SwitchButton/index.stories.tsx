import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import SwitchButton from '.';

export default {
  title: 'components/molecules/SwitchButton',
  components: SwitchButton,
  argTypes: {
    color: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof SwitchButton>> = (props) => (
  <SwitchButton {...props} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'secondary',
};

export const Inherit = Template.bind({});
Inherit.args = {
  color: 'inherit',
  label: 'inherit',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
  label: 'success',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  label: 'error',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
  label: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  label: 'warning',
};
