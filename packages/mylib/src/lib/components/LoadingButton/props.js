import PropTypes from 'prop-types'

const { bool, string } = PropTypes

export const propTypes = { disabled: bool, loading: bool, type: string }
export const defaultProps = { disabled: false, loading: false, type: 'button' }
