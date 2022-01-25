import { VFC } from 'react';
import styled from 'styled-components';
import NotFoundTopPage from '../../../../public/assets/Images/not_found_top_page.svg';

type Props = {
  readonly className?: string;
};

const Component: VFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>
        <p>このページは、</p>
        <p>現在縦画面には対応しておりません。</p>
        <p>デバイスを横向きにしてお使いください。</p>
      </h2>
      <StyledNotFoundTopPage />
    </div>
  );
};

const StyledNotFoundTopPage = styled(NotFoundTopPage)`
  display: block;
  margin: 3rem auto 0;
`;

const StyledComponent = styled(Component)`
  font-size: 1rem;
  line-height: 1.8;
  color: #4527a0;
  text-align: center;
  margin: 15rem 0 0;
`;

const Container: VFC<Props> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
