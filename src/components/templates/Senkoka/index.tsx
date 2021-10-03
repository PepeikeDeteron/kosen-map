import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import HomeButton from '@/components/molecules/HomeButton'
import MapDisplay from '@/components/molecules/MapDisplay'

type Props = {
  className?: string
}

const Component: React.VFC<Props> = (props) => {
  const { className } = props
  const router = useRouter()

  return (
    <div className={className}>
      <h1 className="title">Map</h1>

      <body className="home">
        <MapDisplay>専攻科・教育棟の立体地図をここに表示</MapDisplay>

        <div className="button-list">
          <div className="home-button">
            <HomeButton onClick={() => router.push('/')} />
          </div>
        </div>
      </body>
    </div>
  )
}

const StyledComponent = styled(Component)`
  margin: 0 auto;
  text-align: center;

  .title {
    font-family: Trebuchet MS, Courier New, Courier, sans-serif;
    font-size: 5rem;
    letter-spacing: 1rem;
    color: #90a4ae;
    text-align: right;
    margin-right: 2rem;
    margin-bottom: -10rem;
    user-select: none;
  }

  .home {
    padding-top: 6rem;

    // タブレット
    @media screen and (max-width: 1024px) {
      padding-top: 18rem;
    }
  }

  .button-list {
    display: flex;
    justify-content: center;
    padding-top: 4rem;
  }

  .home-button {
    padding: 0.5rem 4rem;
  }
`

const Container: React.VFC<Props> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
