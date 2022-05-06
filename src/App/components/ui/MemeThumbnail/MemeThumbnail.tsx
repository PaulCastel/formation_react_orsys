import React from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'
import { IMeme, IImage } from '../../../interfaces/common'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MemeThumbnail:React.FC<{images:Array<IImage>, memes:Array<IMeme>}> = (props:any) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((e:IMeme, i:number) => (
        <Link to={`/editor/${e.id}`} key={`thumbs-`+i}>
          <MemeSVGViewer 
            meme={e} 
            image={props.images.find((img:IImage) => img.id === e.imageId)}
            basePath='/images/'
          />
        </Link>
      ))}
    </div>
  )
}

MemeThumbnail.propTypes = {
  memes:PropTypes.array.isRequired,
  images:PropTypes.array.isRequired,
};

function mapStateToProps(state:any, ownprops:any) {
  return {
    ...ownprops,
    memes: state.ressources.memes,
    images:state.ressources.images,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}
export const ConnectedMemeThumbnail = connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);
export default MemeThumbnail
