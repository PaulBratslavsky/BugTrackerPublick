import React from 'react'
import Login from '../pages/login'

const withAuth  = WrappedCopponent => ({isAuthenticated, component, ...props}) => {
    if (!isAuthenticated) return <Login />   
    return <WrappedCopponent {...props} />
}

export default withAuth
