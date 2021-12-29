import React from 'react';
import styled from 'styled-components';
import { CommonLoading } from 'react-loadingg';
import { LoaderColorProps, LoaderSizeProps } from '@/types/loader';

type ContainerProps = {
  readonly color: LoaderColorProps;
  readonly size: LoaderSizeProps;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = ({ className, color, size }) => {
  return (
    <>
      <CommonLoading color={color} size={size} />
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
  font-size: 2rem;
  text-align: center;
  height: 25vh;
  transform: translateX(-50%);
  line-height: 30px;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
