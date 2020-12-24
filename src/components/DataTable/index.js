import React from 'react'
import styled from 'styled-components'
/*******************************************
  TableColumn Components
*******************************************/
export const TableColumn = (props) => <div {...props} />

/*******************************************
  TableRow Components
*******************************************/
function TableRow({ row, columns, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      {columns.map((column) => {
        const result = Object.keys(row).find(
          (item) => item === column.props.source
        )

        if (column.props.status)
          return (
            <td>
              <span class="badge">{row[result]}</span>
            </td>
          )

        return <td>{row[result]}</td>
      })}
    </tr>
  )
}

/*******************************************
  Table Components
*******************************************/
const TableStyled = styled.table`
  display: table;
  width: 100%;
  color: #adb5bd;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 1px;
  margin-bottom: 1.5rem;

  thead {
    vertical-align: middle;
  }

  td,
  th {
    padding: 0.85rem;
    white-space: nowrap;
  }

  tr {
    display: table-row;
    vertical-align: bottom;
    border-bottom: 2px solid #3a4250;
    transition: all 0.5s ease;
  }

  tr:hover {
    background: #6b5ebc;
    color: #f7f7f7;
  }

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    color: #fff;
    background-color: #ff5b5b;
  }
`

export default function Table({ children, sourceData }) {
  const columns = React.Children.toArray(children)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if (sourceData) setData(sourceData)
  }, [sourceData])

  return (
    <TableStyled>
      <thead>
        <tr>
          <th>#</th>
          {columns.map((column) => (
            <th>{column.props.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <TableRow key={row.id} row={row} columns={columns} index={index} />
        ))}
      </tbody>
    </TableStyled>
  )
}
