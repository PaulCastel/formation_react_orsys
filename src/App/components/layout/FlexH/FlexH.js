import React from 'react'
import PropTypes from 'prop-types'
import style from './FlexH.module.css'

function FlexH(props) {
  return (
    <div className={style.FlexH} data-testid="FlexH">FlexH</div>
  )
}

FlexH.propTypes = {
    children: PropTypes.any.isRequired,
}

export default FlexH
