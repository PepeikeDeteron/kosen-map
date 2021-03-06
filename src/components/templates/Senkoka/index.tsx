import { VFC } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import HomeButton from '@/components/molecules/HomeButton';
import MapDisplay from '@/components/molecules/MapDisplay';
import RoomButton from '@/components/molecules/RoomButton';
import Home404 from '@/components/templates/Home404';
import { mobileMaxWidth, tabletMaxWidth } from '@/constants/common';
import { senkoka } from '@/data/senkoka';

type ContainerProps = {
  readonly isMobileScreen: boolean;
  readonly isTabletScreen: boolean;
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const SenkokaModel = dynamic(() => import('@/libs/Three/Senkoka'), {
  ssr: false,
});

const Component: VFC<Props> = ({
  className,
  isMobileScreen,
  isTabletScreen,
}) => {
  const router = useRouter();

  return (
    <>
      <div className={className}>
        <h2 className="title">Map</h2>
        <div className="display">
          <MapDisplay>
            <SenkokaModel />
          </MapDisplay>
          <div className="guide-button">
            <RoomButton color="inherit" data={senkoka} />
          </div>
        </div>
        <div className="button-list">
          <div className="home-button">
            <HomeButton onClick={() => router.push('/')} />
          </div>
        </div>
      </div>
      <div>{isMobileScreen && <Home404 />}</div>
      <div>{isTabletScreen && <Home404 />}</div>
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
    padding: 2rem;
    margin-left: -18rem;
    height: 60vh;
  }

  .button-list {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }

  .home-button {
    padding: 0.5rem 4rem;
  }

  @media only screen and (max-width: ${tabletMaxWidth}) and (orientation: portrait) {
    display: none;
  }
`;

const Container: VFC<Partial<ContainerProps>> = () => {
  const isMobileScreen = useMediaQuery({
    query: `(max-width: ${mobileMaxWidth})`,
  });

  const isTabletScreen = useMediaQuery({
    query: `(max-width: ${tabletMaxWidth})`,
  });

  const containerProps = { isMobileScreen, isTabletScreen };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
