import React from 'react'
import Login from '../pages/Login'

const withAuth  = WrappedCopponent => ({isAuthenticated, component, ...props}) => {
    if (!isAuthenticated) return <Login />   
    return <WrappedCopponent {...props} />
}

export default withAuth
