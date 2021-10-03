import React from 'react'
import { styled } from '@mui/system'
import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

type Props = {
  className?: string
}

const Component: React.VFC<Props> = (props) => {
  const { className, ...restProps } = props

  return (
    <IconButton className={className} {...restProps}>
      <HomeIcon className="icon" />
    </IconButton>
  )
}

const StyledComponent = styled(Component)`
  width: 4rem;
  height: 4rem;

  .icon {
    font-size: 3rem;
  }
`

const Container: React.VFC<Props> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)
