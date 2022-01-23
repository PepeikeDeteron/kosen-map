import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import FacilitySingleButton from '.';
import { senkokaFacility } from '@/data/kyoiku';

export default {
  title: 'components/molecules/FacilitySingleButton',
  components: FacilitySingleButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof FacilitySingleButton>> = (
  props
) => <FacilitySingleButton {...props} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  label: senkokaFacility.map((data) => data.name),
};
