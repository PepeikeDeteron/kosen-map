import { VFC, memo } from 'react';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

type ContainerProps = Readonly<{
  readonly onClick: () => void;
}>;

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: VFC<Props> = ({ className, ...restProps }) => {
  return (
    <IconButton className={className} aria-label="ホームボタン" {...restProps}>
      <HomeIcon className="icon" />
    </IconButton>
  );
};

const StyledComponent = styled(Component)`
  width: 4rem;
  height: 4rem;

  .icon {
    font-size: 3rem;
  }
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default memo(Container);
