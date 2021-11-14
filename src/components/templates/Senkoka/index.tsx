import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import HomeButton from '@/components/molecules/HomeButton'
import MapDisplay from '@/components/molecules/MapDisplay'
import SwitchButton from '@/components/molecules/SwitchButton'
import Home404 from '@/components/templates/Home404'
import { mobileMaxWidth } from '@/constants/common'

type ContainerProps = {
  isMobileScreen: boolean
  changeModel: boolean
  onChangeModel: () => void
}

type Props = {
  className?: string
} & ContainerProps

const SenkokaModel = dynamic(() => import('@/data/3Dmap/Senkoka'), {
  ssr: false,
})

const SenkokaSplitModel = dynamic(() => import('@/data/3Dmap/SenkokaSplit'), {
  ssr: false,
})

const Component: React.VFC<Props> = (props) => {
  const { className, isMobileScreen, changeModel, onChangeModel } = props
  const router = useRouter()

  return (
    <>
      <div className={className}>
        <h2 className="title">Map</h2>
        <div className="display">
          <MapDisplay>
            {changeModel ? <SenkokaModel /> : <SenkokaSplitModel />}
          </MapDisplay>
        </div>
        <div className="button-list">
          <div className="home-button">
            <HomeButton onClick={() => router.push('/')} />
          </div>
          <SwitchButton
            color="primary"
            label={changeModel ? '分割表示モード' : '全体表示モード'}
            onClick={onChangeModel}
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

  @media screen and (max-width: ${mobileMaxWidth}) {
    display: none;
  }
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const [changeModel, setChangeModel] = useState(false)

  const onChangeModel = () => setChangeModel(!changeModel)

  const isMobileScreen = useMediaQuery({ query: '(max-width: 599px)' })

  const containerProps = {
    isMobileScreen,
    changeModel,
    onChangeModel,
  }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container
