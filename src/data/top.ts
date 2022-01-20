import {
  KYOIKU_0000,
  KYOIKU_1000,
  KYOIKU_2000,
  KYOIKU_3000,
  KYOIKU_4000,
  KYOIKU_5000,
  KYOIKU_6000,
  KYOIKU_7000,
  SENKOKA_000,
} from '@/data/room';
import {
  kyoiku0000,
  kyoiku1000,
  kyoiku2000,
  kyoiku3000,
  kyoiku4000,
  kyoiku5000,
  kyoiku6000,
  kyoiku7000,
  senkoka000,
} from '@/libs/Three/Top';
import { GuideProps } from '@/models/guide';

// 管理・教育棟全体図
export const top: GuideProps[] = [
  {
    id: 0,
    name: KYOIKU_0000,
    position: kyoiku0000,
  },
  {
    id: 100,
    name: SENKOKA_000,
    position: senkoka000,
  },
  {
    id: 1000,
    name: KYOIKU_1000,
    position: kyoiku1000,
  },
  {
    id: 2000,
    name: KYOIKU_2000,
    position: kyoiku2000,
  },
  {
    id: 3000,
    name: KYOIKU_3000,
    position: kyoiku3000,
  },
  {
    id: 4000,
    name: KYOIKU_4000,
    position: kyoiku4000,
  },
  {
    id: 5000,
    name: KYOIKU_5000,
    position: kyoiku5000,
  },
  {
    id: 6000,
    name: KYOIKU_6000,
    position: kyoiku6000,
  },
  {
    id: 7000,
    name: KYOIKU_7000,
    position: kyoiku7000,
  },
];
