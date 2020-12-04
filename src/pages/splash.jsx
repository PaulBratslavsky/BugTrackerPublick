import React, { useContext } from 'react'
import styled from 'styled-components'
import Loader from '../components/Loader'
import { UserContext } from '../context/userContext'

const HomeLayout = styled.div`

`

export default function Home() {
  const { isLoading, data } = useContext(UserContext)
  console.log(data)

  if (isLoading) return <Loader />

  return <HomeLayout>
    splash page
  </HomeLayout>
}
