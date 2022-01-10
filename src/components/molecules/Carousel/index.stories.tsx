import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Carousel from '.';
import {
  kyoikuCommonFacilities,
  kyoikuMachineGroup,
  kyoikuElectricGroup,
  kyoikuInformationTechnologyGroup,
  kyoikuChemistryGroup,
  kyoikuIntegratedScience,
} from '@/data/kyoiku';

export default {
  title: 'components/molecules/Carousel',
  components: Carousel,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof Carousel>> = (props) => (
  <Carousel {...props} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'inherit',
  data: [
    kyoikuCommonFacilities,
    kyoikuMachineGroup,
    kyoikuElectricGroup,
    kyoikuInformationTechnologyGroup,
    kyoikuChemistryGroup,
    kyoikuIntegratedScience,
  ],
};
