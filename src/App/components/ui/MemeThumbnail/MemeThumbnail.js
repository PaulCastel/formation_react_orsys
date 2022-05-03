import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'

const memeThumbnailInitialState = {};
const MemeThumbnail = (props) => {
  const [state, setstate] = useState(memeThumbnailInitialState);
  useEffect(() => {}, []);

  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      MemeThumbnail
      <br/>
      {JSON.stringify(props)}
    </div>
  )
}

MemeThumbnail.propTypes = {};
MemeThumbnail.defaultTypes = {};

export default MemeThumbnail
