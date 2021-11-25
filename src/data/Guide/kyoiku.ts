import {
  kyoiku000,
  kyoiku100,
  kyoiku200,
  kyoiku300,
  kyoiku400,
  kyoiku500,
  kyoiku600,
  kyoiku700,
} from '@/data/3Dmap/Kyoiku'
import { GuideProps } from '@/types/guide'

export const kyoiku: GuideProps[] = [
  {
    id: 99,
    name: `${process.env.KYOIKU_000}`,
    position: kyoiku000,
  },
  {
    id: 100,
    name: `${process.env.KYOIKU_100}`,
    position: kyoiku100,
  },
  {
    id: 200,
    name: `${process.env.KYOIKU_200}`,
    position: kyoiku200,
  },
  {
    id: 300,
    name: `${process.env.KYOIKU_300}`,
    position: kyoiku300,
  },
  {
    id: 400,
    name: `${process.env.KYOIKU_400}`,
    position: kyoiku400,
  },
  {
    id: 500,
    name: `${process.env.KYOIKU_500}`,
    position: kyoiku500,
  },
  {
    id: 600,
    name: `${process.env.KYOIKU_600}`,
    position: kyoiku600,
  },
  {
    id: 700,
    name: `${process.env.KYOIKU_700}`,
    position: kyoiku700,
  },
]
