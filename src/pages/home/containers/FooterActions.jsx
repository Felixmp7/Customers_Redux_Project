import React from 'react'
import PropTypes from 'prop-types'

const FooterActions = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

FooterActions.propTypes = {
  children: PropTypes.node
}

export default FooterActions
