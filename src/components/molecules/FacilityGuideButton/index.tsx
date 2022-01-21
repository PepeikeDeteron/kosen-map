import { VFC, memo } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { ColorProps } from '@/models/color';
import { GuideProps } from '@/models/guide';

type ContainerProps = {
  readonly color: ColorProps;
  readonly data: GuideProps[];
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: VFC<Props> = ({ color, data, ...restProps }) => {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      variant="contained"
      color={color}
      {...restProps}
    >
      {data &&
        data.map((datum) => (
          <Button key={datum.id} onClick={datum.position}>
            {datum.name}
          </Button>
        ))}
    </ButtonGroup>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  width: 14rem;
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default memo(Container);
