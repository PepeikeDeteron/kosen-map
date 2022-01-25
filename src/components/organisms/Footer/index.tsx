import { VFC, memo } from 'react';
import styled from 'styled-components';

type Props = {
  readonly className?: string;
};

const Component: VFC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <p>&copy; 2022 Hayakawa Laboratory feat. SandboxProject</p>
    </footer>
  );
};

const StyledComponent = styled(Component)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.5rem;
  font-size: 0.6rem;
  opacity: 0.65;
`;

const Container: VFC = (props) => {
  return <StyledComponent {...props} />;
};

export default memo(Container);
