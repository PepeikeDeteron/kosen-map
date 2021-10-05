import React from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import HomeButton from '@/components/molecules/HomeButton'
import MapDisplay from '@/components/molecules/MapDisplay'
import Home404 from '@/components/templates/Home404'

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

        <body className="home">
          <MapDisplay>管理・教育棟の立体地図をここに表示</MapDisplay>

          <div className="button-list">
            <div className="home-button">
              <HomeButton onClick={() => router.push('/')} />
            </div>
          </div>
        </body>
      </div>
      <div>{isMobileScreen && <Home404 />}</div>
    </>
  )
}

const StyledComponent = styled(Component)`
  margin: 0 auto;
  text-align: center;

  .title {
    font-family: Trebuchet MS, Courier New, Courier, sans-serif;
    font-size: 8rem;
    letter-spacing: 1rem;
    color: #90a4ae;
    text-align: right;
    margin-bottom: -8rem;
    user-select: none;
  }

  .home {
    padding-top: 8rem;
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
  @media screen and (max-width: 599px) {
    display: none;
  }
`

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 599px)' })

  const containerProps = { isMobileScreen }

  return <StyledComponent {...{ ...containerProps }} />
}

export default Container
