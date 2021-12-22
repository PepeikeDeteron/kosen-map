import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import GuideButton from '.';
import { senkoka101, senkoka102, senkoka103 } from '@/data/3Dmap/SenkokaSplit';
import { senkoka } from '@/data/Guide/senkoka';
import { kyoiku } from '@/data/Guide/kyoiku';

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
  color: 'primary',
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

export const SenkokaSplit = Template.bind({});
SenkokaSplit.args = {
  color: 'primary',
  data: senkoka,
};

export const Kyoiku = Template.bind({});
Kyoiku.args = {
  color: 'secondary',
  data: kyoiku,
};
