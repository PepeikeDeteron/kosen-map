import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import GuideButton from '.';
import { senkoka101, senkoka102, senkoka103 } from '@/libs/Three/SenkokaDivide';
import { senkokaDivide } from '@/data/senkoka';
import { kyoiku } from '@/data/kyoiku';

export default {
  title: 'components/molecules/GuideButton',
  components: GuideButton,
  argTypes: {
    color: {
      control: 'color',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof GuideButton>> = (props) => (
  <GuideButton {...props} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'inherit',
  data: [
    {
      id: 101,
      name: 'ガイドボタン1',
      position: senkoka101,
    },
    {
      id: 102,
      name: 'ガイドボタン2',
      position: senkoka102,
    },
    {
      id: 103,
      name: 'ガイドボタン3',
      position: senkoka103,
    },
  ],
};

export const Senkoka = Template.bind({});
Senkoka.args = {
  color: 'inherit',
  data: senkokaDivide,
  disabled: true,
};

export const SenkokaDivide = Template.bind({});
SenkokaDivide.args = {
  color: 'inherit',
  data: senkokaDivide,
};

export const Kyoiku = Template.bind({});
Kyoiku.args = {
  color: 'inherit',
  data: kyoiku,
};
