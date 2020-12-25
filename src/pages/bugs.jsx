import React from 'react'
import Badge from '../components/Badge'
import Card from '../components/Card'
import Table, { TableColumn } from '../components/DataTable'

const mockData = [
  {
    id: 534,
    title: 'Adminto Admin v1',
    startDate: '01/01/2017',
    dueDate: '01/01/2017',
    status: 'released',
    assigned: 'Coderthemes',
  },
  {
    id: 345,
    title: 'Database Table',
    startDate: '01/03/2019',
    dueDate: '01/01/2021',
    status: 'waiting',
    assigned: 'CodeMasters',
  },
  {
    id: 124,
    title: 'Checkout Page',
    startDate: '01/01/2020',
    dueDate: '01/01/2021',
    status: 'in progress',
    assigned: 'Paul',
  },
  {
    id: 134,
    title: 'Bug Tracker Table',
    startDate: '12/26/2020',
    dueDate: '01/24/2021',
    status: 'in progress',
    assigned: 'Paul',
  },
  {
    id: 345,
    title: 'Bug Tracker add bug',
    startDate: '12/26/2020',
    dueDate: '02/24/2021',
    status: 'waiting',
    assigned: 'Paul',
  },
  {
    id: 324,
    title: 'Bug Track select bug',
    startDate: '12/26/2020',
    dueDate: '03/26/2021',
    status: 'waiting',
    assigned: 'Paul',
  },
]

export default function Bugs() {
  return (
    <div>
      <Card title="All Bugs">
        <Table sourceData={mockData}>
          <TableColumn source="id" label="Id" />
          <TableColumn source="title" label="Project Name" />
          <TableColumn source="startDate" label="Start Date" />
          <TableColumn source="dueDate" label="Due Date" />
          <TableColumn
            source="status"
            label="Status"
            render={(data) => <Badge text={data} />}
          />
          <TableColumn source="assigned" label="Assigned" />
          </Table>
      </Card>
    </div>
  )
}
