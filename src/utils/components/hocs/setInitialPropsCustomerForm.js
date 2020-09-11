import React from 'react'

export const setInitialPropsCustomerForm = WrappedComponent => props => {
  return <WrappedComponent {...props} initialValues={props}/>;
}
