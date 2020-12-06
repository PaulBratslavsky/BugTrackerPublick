import React, { useContext } from 'react'
import WithAuth from './components/MainLayout'
import { UserContext } from './context/userContext'

function App() {
  const { user } = useContext(UserContext)
  return <div>
    <WithAuth isAuthenticated={user} />
  </div>
}
export default App