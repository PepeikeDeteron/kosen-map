import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Carousel from '@/components/molecules/Carousel';
import GuideButton from '@/components/molecules/GuideButton';
import HomeButton from '@/components/molecules/HomeButton';
import MapDisplay from '@/components/molecules/MapDisplay';
import SwitchButton from '@/components/molecules/SwitchButton';
import Home404 from '@/components/templates/Home404';
import { mobileMaxWidth } from '@/constants/common';
import {
  kyoiku,
  kyoikuCommonFacilities,
  kyoikuMachineGroup,
  kyoikuElectricGroup,
  kyoikuInformationTechnologyGroup,
  kyoikuChemistryGroup,
  kyoikuIntegratedScience,
} from '@/data/kyoiku';
import { GuideProps } from '@/models/guide';

type ContainerProps = {
  readonly isMobileScreen: boolean;
  readonly changeModel: boolean;
  readonly onChangeModel: () => void;
  readonly carouselData: GuideProps[][];
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const KyoikuModel = dynamic(() => import('@/libs/Three/Kyoiku'), {
  ssr: false,
});

const KyoikuDivideModel = dynamic(() => import('@/libs/Three/KyoikuDivide'), {
  ssr: false,
});

const Component: React.VFC<Props> = ({
  className,
  isMobileScreen,
  changeModel,
  onChangeModel,
  carouselData,
}) => {
  const router = useRouter();

  return (
    <>
      <div className={className}>
        <h2 className="title">Map</h2>
        <div className="display">
          <MapDisplay>
            {changeModel ? <KyoikuModel /> : <KyoikuDivideModel />}
          </MapDisplay>
          <div className="guide-button">
            {changeModel ? (
              <GuideButton color="inherit" data={kyoiku} />
            ) : (
              // <GuideButton color="inherit" data={kyoikuBuildingAll} />
              <Carousel color="inherit" data={carouselData} />
            )}
          </div>
        </div>
        <div className="button-list">
          <div className="home-button">
            <HomeButton onClick={() => router.push('/')} />
          </div>
          <SwitchButton
            color="success"
            label={changeModel ? '分割表示モード' : '全体表示モード'}
            onClick={onChangeModel}
          />
        </div>
      </div>
      <div>{isMobileScreen && <Home404 />}</div>
    </>
  );
};

const StyledComponent = styled(Component)`
  padding: 2rem 3vh;

  .title {
    font-family: Trebuchet MS, Courier New, Courier, sans-serif;
    font-size: 6rem;
    letter-spacing: 1rem;
    color: #808080;
    text-align: right;
    padding-bottom: 0.5rem;
    user-select: none;
  }

  .display {
    display: flex;
  }

  .guide-button {
    display: flex;
    height: 60vh;
    margin-left: -14rem;
    padding-top: 10rem;
  }

  .button-list {
    display: flex;
    justify-content: center;
    padding-top: 4rem;
  }

  .home-button {
    padding: 0.5rem 4rem;
  }

  @media screen and (max-width: ${mobileMaxWidth}) {
    display: none;
  }
`;

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const [changeModel, setChangeModel] = useState(false);

  const onChangeModel = () => setChangeModel(!changeModel);

  const isMobileScreen = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth})`,
  });

  const carouselData = [
    kyoikuCommonFacilities,
    kyoikuMachineGroup,
    kyoikuElectricGroup,
    kyoikuInformationTechnologyGroup,
    kyoikuChemistryGroup,
    kyoikuIntegratedScience,
  ];

  const containerProps = {
    isMobileScreen,
    changeModel,
    onChangeModel,
    carouselData,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
