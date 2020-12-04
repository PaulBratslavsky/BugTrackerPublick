import React, { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import SideBar from './components/SideBar'
import Header from './components/Header'
import ContentView from './components/ContentView'

import Splash from './pages/splash'
import MyBugs from './pages/mybugs'
import Dashboard from './pages/dashboard'
import Bugs from './pages/bugs'
import Login from './pages/login'

import { UserContext } from './context/userContext'

const LayoutStyled = styled.div`
  background: #222327;
  color: #fff;
  height: 100vh;
  display: grid;
  grid-template-columns: 85px 1fr;
  grid-template-rows: 65px 1fr;

  .sidebar { grid-area: 1 / 1 / 3 / 2; }
  .header { grid-area: 1 / 2 / 2 / 3; }
  .content { grid-area: 2 / 2 / 3 / 3; }
`
export default function Layout() {
  const history = useHistory();
  const isUser = true;

  useEffect(() =>{
    if (!isUser) {
      history.push('/')
    }
  },[])

 const { isLoading, data } = useContext(UserContext)
 console.log(isLoading, data)
  return <LayoutStyled>
    <SideBar isLoading={isLoading} data={data} />
    <Header />
    <ContentView>
    <Switch>
      <Route exact path='/' component={Splash} />
      <Route exact path='/mybugs' component={MyBugs} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/bugs' component={Bugs} />
      <Route exact path='/login' component={Login} />
      <Route component={() => <h1>not found</h1>} />
    </Switch>
    </ContentView>
  </LayoutStyled>
}
