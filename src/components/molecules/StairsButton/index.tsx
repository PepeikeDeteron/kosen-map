import { VFC, memo } from 'react';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import StairsIcon from '@mui/icons-material/Stairs';
import { ColorProps } from '@/models/color';

type ContainerProps = Readonly<{
  readonly color: ColorProps;
  readonly onClick: () => void;
}>;

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: VFC<Props> = ({ className, color, ...restProps }) => {
  return (
    <IconButton
      className={className}
      color={color}
      aria-label="階段ガイド"
      {...restProps}
    >
      <StairsIcon className="icon" />
    </IconButton>
  );
};

const StyledComponent = styled(Component)`
  width: 5rem;
  height: 5rem;

  .icon {
    font-size: 4rem;
  }
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default memo(Container);
