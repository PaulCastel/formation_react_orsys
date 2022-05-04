import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'
import { IMeme, IImage } from '../../../interfaces/common'
import { MemeSVGViewer } from 'orsys-tjs-meme'

const MemeThumbnail:React.FC<{images:Array<IImage>, memes:Array<IMeme>}> = (props:any) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((e:IMeme, i:number) => (
        <MemeSVGViewer 
          key={`thumbs-`+i}
          meme={e} 
          image={props.images.find((img:IImage) => img.id === e.imageId)}
          basePath='/images/'
        />
      ))}
    </div>
  )
}

MemeThumbnail.propTypes = {
  memes:PropTypes.array.isRequired,
  images:PropTypes.array.isRequired,
};

export default MemeThumbnail
