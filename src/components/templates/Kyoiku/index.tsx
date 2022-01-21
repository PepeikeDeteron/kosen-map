import { VFC } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import EntranceButton from '@/components/molecules/EntranceButton';
import HomeButton from '@/components/molecules/HomeButton';
import MapDisplay from '@/components/molecules/MapDisplay';
import FacilityGuideButton from '@/components/molecules/FacilityGuideButton';
import CarouselGuide from '@/components/organisms/CarouselGuide';
import Home404 from '@/components/templates/Home404';
import { mobileMaxWidth } from '@/constants/common';
import { carouselGuide } from '@/data/carousel';
import { kyoikuFacility, kyoikuEntrance } from '@/data/kyoiku';

type ContainerProps = {
  readonly isMobileScreen: boolean;
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const KyoikuModel = dynamic(() => import('@/libs/Three/Kyoiku'), {
  ssr: false,
});

const Component: VFC<Props> = ({ className, isMobileScreen }) => {
  const router = useRouter();

  return (
    <>
      <div className={className}>
        <h2 className="title">Map</h2>
        <div className="display">
          <div className="sub-guide-button">
            <EntranceButton
              color="warning"
              label={kyoikuEntrance.map((label) => label.name)}
              onClick={() => kyoikuEntrance.map((click) => click.position)}
            />
            <FacilityGuideButton color="inherit" data={kyoikuFacility} />
          </div>
          <MapDisplay>
            <KyoikuModel />
          </MapDisplay>
          <div className="guide-button">
            <CarouselGuide color="inherit" data={carouselGuide} />
          </div>
        </div>
        <div className="button-list">
          <div className="home-button">
            <HomeButton onClick={() => router.push('/')} />
          </div>
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
    padding-bottom: 2rem;
    user-select: none;
  }

  .display {
    display: flex;
  }

  .guide-button {
    display: flex;
    margin 0 auto;
    height: 60vh;
  }

  .sub-guide-button {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    height: 30%;

    > * {
      margin-bottom: 3rem;
    }
  }


  .button-list {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }

  .home-button {
    padding: 0.5rem 4rem;
  }

  @media screen and (max-width: ${mobileMaxWidth}) {
    display: none;
  }
`;

const Container: VFC<Partial<ContainerProps>> = () => {
  const isMobileScreen = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth})`,
  });

  const containerProps = { isMobileScreen };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
