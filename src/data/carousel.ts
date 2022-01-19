import {
  kyoikuCommonFacilities,
  kyoikuMachineGroup,
  kyoikuElectricGroup,
  kyoikuInformationTechnologyGroup,
  kyoikuChemistryGroup,
  kyoikuIntegratedScience,
} from '@/data/kyoiku';
import { CarouselGuideProps } from '@/models/guide';

export const carouselGuide: CarouselGuideProps[] = [
  {
    name: '共通施設',
    guide: kyoikuCommonFacilities,
  },
  {
    name: '機械・知能系',
    guide: kyoikuMachineGroup,
  },
  {
    name: '電気・電子系',
    guide: kyoikuElectricGroup,
  },
  {
    name: '情報・ソフトウェア系',
    guide: kyoikuInformationTechnologyGroup,
  },
  {
    name: '化学・バイオ系',
    guide: kyoikuChemistryGroup,
  },
  {
    name: '総合科学',
    guide: kyoikuIntegratedScience,
  },
];
