import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import GuideButton from '@/components/molecules/GuideButton';
import { ColorProps } from '@/models/color';
import { GuideProps } from '@/models/guide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ContainerProps = {
  readonly color: ColorProps;
  readonly data: GuideProps[][];
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = ({ color, data, className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  } as const;

  return (
    <div className={className}>
      <div className="carousel">
        <Slider {...settings}>
          {data.map((datum, index) => (
            <GuideButton key={index} color={color} data={datum} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;

  .carousel {
    width: 14rem;

    .slick-prev:before,
    .slick-next:before {
      color: black;
    }
  }
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
