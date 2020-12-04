import React, { useContext } from 'react'
import styled from 'styled-components'
import Loader from '../components/Loader'
import { UserContext } from '../context/userContext'
import { Route, useRouteMatch } from 'react-router-dom'

// function ListPannel() {
//   return <div>
//     pannel
//   </div>
// }

const SectionHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #adadad;
  margin-bottom: 1rem;
  span {
    font-size: 1.2rem;
  }

  .count {
    color: #7F6CE8;
    padding: 0 4px;
  }
`

function SectionHeader({title, count = null}) {
  return <SectionHeaderStyled>
    <h2>{title}</h2> 
    { count && <span>(<span className="count">{count}</span>)</span> }
  </SectionHeaderStyled>
}

const DashboardLayout = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr) 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
`

export default function Dashboard() {
  const { isLoading, data } = useContext(UserContext)
  const { path } = useRouteMatch()

  console.log(data)

  if (isLoading) return <Loader />

  console.log(path)
  return <DashboardLayout>
    <div>
      <Route path={`${path}`}>
        <SectionHeader title="Projects" count={10} />
      </Route>
    </div>
    <div>
      <Route path={`${path}/:projectID`}>
        <SectionHeader title="Bugs" count={4} />
      </Route>
    </div>
    <div>
      <Route path={`${path}/:projectID/:bugsID`}>
        <SectionHeader title="Details" count={4} />
      </Route>
    </div>
    <div>
      <Route path={`${path}/:projectID/:bugsID/:notesID`}>
        <SectionHeader title="Notes" count={4} />
      </Route>
    </div>
  </DashboardLayout>
}


/*


 <SectionHeader title="Projects" count={10} />
      <ListPannel data={data} render={() => <h2>Projects</h2>} />
 
 */