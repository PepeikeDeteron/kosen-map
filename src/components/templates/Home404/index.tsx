import React from 'react'
import styled from 'styled-components'
import NotFoundTopPage from '../../../../public/not_found_top_page.svg'

type Props = {
  className?: string
}

const Component: React.VFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>
        <p>このページは、</p>
        <p>現在スマートフォンには対応しておりません。</p>
      </h2>
      <StyledNotFoundTopPage />
    </div>
  )
}

const StyledNotFoundTopPage = styled(NotFoundTopPage)`
  display: block;
  margin: 3rem auto 0;
`

const StyledComponent = styled(Component)`
  font-size: 1rem;
  line-height: 1.8;
  color: #4527a0;
  text-align: center;
  margin: 15rem 0 0;
`

const Container: React.VFC<Props> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
