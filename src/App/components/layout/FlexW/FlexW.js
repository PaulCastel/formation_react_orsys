import React from 'react'
import PropTypes from 'prop-types'
import style from './FlexW.module.css'

function FlexW(props) {
  return (
    <div className={style.FlexW} data-testid="FlexW">{props.children}</div>
  )
}

FlexW.propTypes = {
    children: PropTypes.any.isRequired,
}

export default FlexW
