import FlexW from './components/layout/FlexW/FlexW';
import ConnectedMemeViewer from './components/ui/ConnectedMemeViewer/ConnectedMemeViewer';
import { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import { ConnectedMemeThumbnail } from './components/ui/MemeThumbnail/MemeThumbnail';
import Navbar from './components/ui/Navbar/Navbar';
import { Routes, Route, useParams } from 'react-router-dom'
import { PDFConnectedMemeThumbnail } from './components/pdf/PDFMemeThumbnail/PDFThumbnail';
import { connect } from 'react-redux';
import { IMeme } from './interfaces/common';
import { ACTIONS_CURRENT } from './store/store';
import { useEffect } from 'react';

const App = () => {
    console.log('%c%s','font-size:24pt;color:tomato;font-weight:900','Hello')
    return (
      <div className='App'>
        <Navbar/>
          <Routes>
            <Route path="/" element={<div>Hello à tous</div>}/>
            <Route path="/editor" element={<MemeEditor/>}/>
            <Route path="/editor/:id" element={<MemeEditor/>}/>
            <Route path="/thumbnail" element={<ConnectedMemeThumbnail/>}/>
            <Route path="/thumbnailPDF" element={<PDFConnectedMemeThumbnail/>}/>
          </Routes>
      </div>
    );
}


function mstp(s,o) {
  return {
      memes:s.ressources.memes,
      basePath:'/images/'
  }
}

function mdtp(d:Function) {
  return {
    select:(meme?:IMeme) => {
      if(undefined!==meme){
        d({ type:ACTIONS_CURRENT.UPDATE_MEME, value:meme });
      }
      else{
        d({ type:ACTIONS_CURRENT.CLEAR_CURRENT });
      }
    }
  }
}

const MemeEditor = connect(
  mstp,
  mdtp
)(function(props:{memes:Array<IMeme>, select:Function}) {
  const id = useParams().id
  useEffect(() => {
    props.select(props.memes.find(m => m.id === Number(id)))
  }, [props.memes, id])
  
  return (
    <FlexW>
      <ConnectedMemeViewer/>        
      <ConnectedMemeForm/>
    </FlexW>
  )
})

export default App;