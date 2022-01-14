import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import WithAuth from '../../hoc/WithAuth'

import SideBar from '../SideBar'
import Header from '../Header'
import ContentView from '../ContentView'

import MyBugs from '../../pages/mybugs'
import Projects from '../../pages/projects'
import Bugs from '../../pages/bugs'

const LayoutStyled = styled.div`
  background: #222327;
  color: #fff;
  height: 100%;
  display: grid;
  grid-template-columns: 85px 1fr;
  grid-template-rows: 65px 1fr;

  .sidebar { grid-area: 1 / 1 / 3 / 2; }
  .header { grid-area: 1 / 2 / 2 / 3; }
  .content { grid-area: 2 / 2 / 3 / 3; }
   overflow: auto;
`
function MainLayout() {

  return <LayoutStyled>
    <SideBar />
    <Header />
    <ContentView>
    <Switch>
      <Route exact path='/' component={MyBugs} />
      <Route path='/projects' component={Projects} />
      <Route path='/bugs' component={Bugs} />
      <Route component={() => <h1>not found</h1>} />
    </Switch>
    </ContentView>
  </LayoutStyled>
}

export default WithAuth(MainLayout)