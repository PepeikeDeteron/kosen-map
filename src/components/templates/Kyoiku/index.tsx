import { VFC, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import CarouselGuide from '@/components/molecules/CarouselGuide';
import GuideButton from '@/components/molecules/GuideButton';
import HomeButton from '@/components/molecules/HomeButton';
import MapDisplay from '@/components/molecules/MapDisplay';
import SwitchButton from '@/components/molecules/SwitchButton';
import Home404 from '@/components/templates/Home404';
import { mobileMaxWidth } from '@/constants/common';
import { carouselGuide } from '@/data/carousel';
import { kyoiku } from '@/data/kyoiku';

type ContainerProps = {
  readonly isMobileScreen: boolean;
  readonly changeModel: boolean;
  readonly onChangeModel: () => void;
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const KyoikuModel = dynamic(() => import('@/libs/Three/Top'), {
  ssr: false,
});

const KyoikuDivideModel = dynamic(() => import('@/libs/Three/Kyoiku'), {
  ssr: false,
});

const Component: VFC<Props> = ({
  className,
  isMobileScreen,
  changeModel,
  onChangeModel,
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
              <CarouselGuide color="inherit" data={carouselGuide} />
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

const Container: VFC<Partial<ContainerProps>> = () => {
  const [changeModel, setChangeModel] = useState(false);

  const onChangeModel = () => setChangeModel(!changeModel);

  const isMobileScreen = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth})`,
  });

  const containerProps = {
    isMobileScreen,
    changeModel,
    onChangeModel,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
