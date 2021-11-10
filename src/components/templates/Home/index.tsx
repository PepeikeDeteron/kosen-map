import React from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import HomeButton from '@/components/molecules/HomeButton'
import MapDisplay from '@/components/molecules/MapDisplay'
import SwitchButton from '@/components/molecules/SwitchButton'
import Home404 from '@/components/templates/Home404'
import { mobileMaxWidth } from '@/constants/common'

type ContainerProps = {
  isMobileScreen: boolean
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { className, isMobileScreen } = props
  const router = useRouter()

  return (
    <>
      <div className={className}>
        <h2 className="title">Map</h2>
        <div className="display">
          <MapDisplay>トップページ用の校内案内図をここに表示</MapDisplay>
        </div>
        <div className="button-list">
          <SwitchButton
            color="primary"
            label="専攻科・教育棟"
            onClick={() => router.push('/Senkoka')}
          />
          <div className="home-button">
            <HomeButton onClick={() => router.push('/')} />
          </div>
          <SwitchButton
            color="secondary"
            label="管理・教育棟"
            onClick={() => router.push('/Kanri')}
          />
        </div>
      </div>
      <div>{isMobileScreen && <Home404 />}</div>
    </>
  )
}

const StyledComponent = styled(Component)`
  padding: 2rem 3vh;

  .title {
    font-family: Trebuchet MS, Courier New, Courier, sans-serif;
    font-size: 6rem;
    letter-spacing: 1rem;
    color: #808080;
    text-align: right;
    padding-bottom: 1rem;
    user-select: none;
  }

  .display {
    text-align: center;
  }

  .button-list {
    display: flex;
    justify-content: center;
    padding-top: 4rem;
  }

  .home-button {
    padding: 0.5rem 4rem;
  }

  // スマホ
  @media screen and (max-width: ${mobileMaxWidth}) {
    display: none;
  }
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 599px)' })

  const containerProps = { isMobileScreen }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container
