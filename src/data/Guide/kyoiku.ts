import {
  kyoiku0000,
  kyoiku1000,
  kyoiku2000,
  kyoiku3000,
  kyoiku4000,
  kyoiku5000,
  kyoiku6000,
  kyoiku7000,
} from '@/data/3Dmap/Kyoiku';
import { GuideProps } from '@/models/guide';

export const kyoiku: GuideProps[] = [
  {
    id: 0,
    name: `${process.env.KYOIKU_0000}`,
    position: kyoiku0000,
  },
  {
    id: 1000,
    name: `${process.env.KYOIKU_1000}`,
    position: kyoiku1000,
  },
  {
    id: 2000,
    name: `${process.env.KYOIKU_2000}`,
    position: kyoiku2000,
  },
  {
    id: 3000,
    name: `${process.env.KYOIKU_3000}`,
    position: kyoiku3000,
  },
  {
    id: 4000,
    name: `${process.env.KYOIKU_4000}`,
    position: kyoiku4000,
  },
  {
    id: 5000,
    name: `${process.env.KYOIKU_5000}`,
    position: kyoiku5000,
  },
  {
    id: 6000,
    name: `${process.env.KYOIKU_6000}`,
    position: kyoiku6000,
  },
  {
    id: 7000,
    name: `${process.env.KYOIKU_7000}`,
    position: kyoiku7000,
  },
];

export const kyoikuDivide: GuideProps[] = [];
