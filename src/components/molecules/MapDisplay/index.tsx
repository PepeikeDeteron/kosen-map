import React from 'react'
import { styled } from '@mui/system'
import { Paper } from '@mui/material'

type ContainerProps = {
  children: React.ReactChild
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, children, ...restProps } = props

  return (
    <div className={className}>
      <Paper className={'paper'} {...restProps}>
        {children}
      </Paper>
    </div>
  )
}

const StyledComponent = styled(Component)`
  position: relative;
  width: 70%;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  ::before {
    content: '';
    display: block;
    padding-top: 62.5%; // 画面比率 16:10 (WXGA)
  }

  .paper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  // タブレット
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)
