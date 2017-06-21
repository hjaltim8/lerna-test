import React from 'react'
import { propTypes, defaultProps } from './props'

const LoadingButton = (props) => {
  let {children, disabled, loading, type, ...propsie} = props
  if (loading) { disabled = true }

  return <button disabled={disabled} type={type} {...propsie}>
    {children}
  </button>
}

LoadingButton.propTypes = propTypes
LoadingButton.defaultProps = defaultProps

export default LoadingButton
