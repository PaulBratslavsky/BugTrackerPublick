import React from 'react'

export default function ContentView({children}) {
  return <div className="content margin padding">
    {children}
  </div>
}