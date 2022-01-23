import { VFC, memo } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { ColorProps } from '@/models/color';

type ContainerProps = {
  readonly color: ColorProps;
  readonly label: string | string[];
  readonly onClick: () => void;
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: VFC<Props> = ({ color, label, ...restProps }) => {
  return (
    <Button variant="contained" color={color} {...restProps}>
      {label}
      <DoubleArrowIcon />
    </Button>
  );
};

const StyledComponent = styled(Component)`
  width: 14rem;
  height: 4rem;
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default memo(Container);
