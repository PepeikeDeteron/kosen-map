import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { ColorProps } from '@/types/color';
import { GuideProps } from '@/types/guide';

type ContainerProps = {
  color: ColorProps;
  data: GuideProps[];
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = ({ color, data, ...restProps }) => {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
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
  width: 14rem;
  flex-basis: 0;
  flex-grow: 1;
  overflow-y: scroll;
`;

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default React.memo(Container);
