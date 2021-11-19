import React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { senkoka } from '@/data/Guide/senkoka'
import { ColorProps } from '@/types/color'

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
  width: 14rem;
  flex-basis: 0;
  flex-grow: 1;
  overflow-y: scroll;
`

const Container: React.VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default React.memo(Container)
