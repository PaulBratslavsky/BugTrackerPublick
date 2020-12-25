import React, { useContext } from 'react'
import styled from 'styled-components'
import Loader from '../components/Loader'
import { UserContext } from '../context/userContext'
import { useRouteMatch } from 'react-router-dom'
import Card from '../components/Card'
import ProjectBox from '../components/ProjectBox/indes'
import Badge from '../components/Badge'

const ProjectsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
`

export default function Projects() {
  const { isLoading, data } = useContext(UserContext)
  const { path } = useRouteMatch()

  console.log(data)
  // const color = "#9683ff"; 
  const color = "#ff8acc"; 
  
  if (isLoading) return <Loader />

  console.log(path)
  return <ProjectsLayout>
      <Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card>
      <Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card>
      <Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card><Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card>
      <Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card>
      <Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card>
      <Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card>
      <Card title="Project Name" component={<Badge text="status" color={color} />} >
        <ProjectBox highlight={color} />
      </Card>
  </ProjectsLayout>
}
