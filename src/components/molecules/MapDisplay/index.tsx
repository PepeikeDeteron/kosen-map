import React from 'react';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import { tabletMaxWidth } from '@/constants/common';

type ContainerProps = {
  children: React.ReactNode;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = ({ className, children, ...restProps }) => {
  return (
    <div className={className} id="map-display">
      <Paper className={'paper'} {...restProps}>
        {children}
      </Paper>
    </div>
  );
};

const StyledComponent = styled(Component)`
  position: relative;
  width: 70%;
  margin: 0 auto;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  ::before {
    content: '';
    display: block;
    padding-top: 62.5%; // 画面比率 16:10 (WXGA)
  }

  .paper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
  }

  @media screen and (max-width: ${tabletMaxWidth}) {
    width: 90%;
  }
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
