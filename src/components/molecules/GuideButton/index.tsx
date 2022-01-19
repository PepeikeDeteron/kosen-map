import { VFC } from 'react';
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

const Component: VFC<Props> = ({ color, data, disabled, ...restProps }) => {
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
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  width: 14rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
