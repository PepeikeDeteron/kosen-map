import React from 'react'
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { ColorProps } from '@/models/types'

type ContainerProps = {
  color: ColorProps
  buttons?: JSX.Element[]
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = ({ color, buttons, ...restProps }) => {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      color={color}
      {...restProps}
    >
      {buttons}
    </ButtonGroup>
  )
}

const StyledComponent = styled(Component)`
  width: 15rem;
`

const Container: React.VFC<ContainerProps> = (props) => {
  const buttons = [
    <Button key="senkoka101">講義室1</Button>,
    <Button key="senkoka106">講義室2</Button>,
    <Button key="senkoka201">ゼミ室1</Button>,
    <Button key="senkoka202">ゼミ室2</Button>,
    <Button key="senkoka203">ゼミ室3</Button>,
    <Button key="senkoka102">コンピューター室</Button>,
    <Button key="senkoka105">機器測定室</Button>,
    <Button key="senkoka103">生産工学実験室</Button>,
    <Button key="senkoka104">物質化学工学実験室</Button>,
    <Button key="senkoka301">1年1組</Button>,
    <Button key="senkoka302">1年2組</Button>,
    <Button key="senkoka303">1年3組</Button>,
    <Button key="senkoka304">1年4組</Button>,
    <Button key="senkoka403">2年M組</Button>,
    <Button key="senkoka404">2年E組</Button>,
    <Button key="senkoka401">3年M組</Button>,
    <Button key="senkoka402">3年E組</Button>,
    <Button key="senkoka501">4年C組</Button>,
    <Button key="senkoka503">5年E組</Button>,
    <Button key="senkoka504">5年J組</Button>,
    <Button key="senkoka502">5年C組</Button>,
  ]

  const containerProps = {
    buttons,
  }

  return <StyledComponent {...props} {...containerProps} />
}

export default React.memo(Container)
