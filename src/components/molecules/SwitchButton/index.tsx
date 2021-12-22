import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ColorProps } from '@/types/color';

type ContainerProps = {
  readonly color: ColorProps;
  readonly label: string;
  readonly onClick: () => void;
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = ({ color, label, ...restProps }) => {
  return (
    <Button variant="outlined" color={color} {...restProps}>
      {label}
    </Button>
  );
};

const StyledComponent = styled(Component)`
  width: 15rem;
  height: 5rem;
  font-size: 1.5rem;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
