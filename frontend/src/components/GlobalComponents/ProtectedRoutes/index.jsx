import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const Index = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth)
                    return <Component />
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }}
        />
    )
}

export default Index
