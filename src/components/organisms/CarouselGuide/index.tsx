import { VFC, memo, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import GuideButton from '@/components/molecules/RoomGuideButton';
import { ColorProps } from '@/models/color';
import { GuideProps, CarouselGuideProps } from '@/models/guide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ContainerProps = {
  readonly color: ColorProps;
  readonly data: CarouselGuideProps[];
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: VFC<Props> = ({ className, color, data, ...restProps }) => {
  const [nav1, setNav1] = useState<string>('');
  const [nav2, setNav2] = useState<GuideProps[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
  } as const;

  return (
    <div className={className} {...restProps}>
      <div className="carousel-name">
        <Slider asNavFor={nav2} ref={(slider: string) => setNav1(slider)}>
          {data &&
            data
              .map((datum) => datum.name)
              .map((value, index) => <p key={index}>{value}</p>)}
        </Slider>
      </div>
      <div className="carousel-guide">
        <Slider
          asNavFor={nav1}
          ref={(slider: GuideProps[]) => setNav2(slider)}
          {...settings}
        >
          {data &&
            data.map((datum, index) => (
              <GuideButton key={index} color={color} data={datum.guide} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-flow: column;
  width: 14rem;
  user-select: none;

  .carousel-name {
    flex-basis: 0;
    flex-grow: 1;
    margin-bottom: -45vh;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;

    .slick-prev:before,
    .slick-next:before {
      color: grey;
    }
  }

  .carousel-guide {
    flex-basis: 0;
    flex-grow: 1;
    padding-top: 4rem;
    overflow-y: scroll;

    * {
      width: 100%;
    }

    .slick-dots {
      bottom: 62vh;

      li {
        width: 10px;
      }
    }

    .slick-slider {
      height: 60vh;
    }
  }
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default memo(Container);
