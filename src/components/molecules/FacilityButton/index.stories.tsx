import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import FacilityButton from '.';
import { kyoiku1101, kyoiku1102, kyoiku1103 } from '@/libs/Three/Kyoiku';
import { kyoikuFacility } from '@/data/kyoiku';

export default {
  title: 'components/molecules/FacilityButton',
  components: FacilityButton,
  argTypes: {
    color: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof FacilityButton>> = (props) => (
  <FacilityButton {...props} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'inherit',
  data: [
    {
      id: 101,
      name: 'ガイドボタン1',
      position: kyoiku1101,
    },
    {
      id: 102,
      name: 'ガイドボタン2',
      position: kyoiku1102,
    },
    {
      id: 103,
      name: 'ガイドボタン3',
      position: kyoiku1103,
    },
  ],
};

export const KyoikuFacility = Template.bind({});
KyoikuFacility.args = {
  color: 'inherit',
  data: kyoikuFacility,
};
