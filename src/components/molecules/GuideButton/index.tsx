import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { ColorProps } from '@/models/color';
import { GuideProps } from '@/models/guide';

type ContainerProps = {
  readonly color: ColorProps;
  readonly data: GuideProps[];
  readonly disabled?: boolean;
};

type Props = {
  readonly className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = ({
  color,
  data,
  disabled,
  ...restProps
}) => {
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
          <Button key={datum.id} onClick={datum.position} disabled={disabled}>
            {datum.name}
          </Button>
        ))}
    </ButtonGroup>
  );
};

const StyledComponent = styled(Component)`
  width: 14rem;
  flex-basis: 0;
  flex-grow: 1;
  overflow-y: scroll;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
