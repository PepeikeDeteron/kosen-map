import React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { senkoka } from '@/data/Guide/senkoka'
import { ColorProps } from '@/models/types'

type ContainerProps = {
  color: ColorProps
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = ({ color, ...restProps }) => {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      color={color}
      {...restProps}
    >
      {senkoka &&
        senkoka.map((data) => (
          <Button key={data.id} onClick={data.position}>
            {data.name}
          </Button>
        ))}
    </ButtonGroup>
  )
}

const StyledComponent = styled(Component)`
  width: 15rem;
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)
