import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import FacilitySingleGuideButton from '.';

export default {
  title: 'components/molecules/FacilitySingleGuideButton',
  components: FacilitySingleGuideButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof FacilitySingleGuideButton>> = (
  props
) => <FacilitySingleGuideButton {...props} />;

export const Default = Template.bind({});
Default.args = {
  color: 'warning',
  label: '正面玄関',
};
