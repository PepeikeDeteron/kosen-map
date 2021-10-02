import React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { ColorProps } from '@/models/types'

type ContainerProps = {
  color: ColorProps
  label: string
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { color, label, ...restProps } = props

  return (
    <Button variant="outlined" color={color} {...restProps}>
      {label}
    </Button>
  )
}

const StyledComponent = styled(Component)`
  width: 15rem;
  height: 5rem;
  font-size: 1.5rem;
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)
