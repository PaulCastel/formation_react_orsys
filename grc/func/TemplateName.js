import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.css'

const templateNameInitialState = {};
const TemplateName = (props) => {
  const [state, setstate] = useState(templateNameInitialState);
  useEffect(() => {}, []);

  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      TemplateName
      <br/>
      {JSON.stringify(props)}
    </div>
  )
}

TemplateName.propTypes = {};
TemplateName.defaultTypes = {};

export default TemplateName
