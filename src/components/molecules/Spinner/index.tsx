import { VFC, memo } from 'react';
import styled from 'styled-components';
import { CommonLoading } from 'react-loadingg';
import { SpinnerColorProps, SpinnerSizeProps } from '@/models/spinner';

type ContainerProps = {
  readonly color: SpinnerColorProps;
  readonly size: SpinnerSizeProps;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: VFC<Props> = ({ className, color, size, ...restProps }) => {
  return (
    <>
      <CommonLoading color={color} size={size} {...restProps} />
      <span className={className}>
        <p>ネットワークの接続状況により、</p>
        <p>読み込みが遅くなる場合があります。</p>
      </span>
    </>
  );
};

const StyledComponent = styled(Component)`
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0;
  color: gray;
  font-size: 1.5rem;
  text-align: center;
  height: 25vh;
  transform: translateX(-50%);
  line-height: 25px;
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default memo(Container);
