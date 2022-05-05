import React from 'react';
import FlexW from './components/layout/FlexW/FlexW';
import Button from './components/ui/Button/Button';
import {MemeSVGViewer} from 'orsys-tjs-meme';
import MemeForm, { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import MemeThumbnail, { ConnectedMemeThumbnail } from './components/ui/MemeThumbnail/MemeThumbnail';
import { DummyMeme, IImage, IMeme } from './interfaces/common';
//import { DummyMeme } from 'orsys-tjs-meme/dist/interfaces/common';
import {store} from './store/store';
import { ADR_REST } from './config/config';
import ConnectedMemeViewer from './components/ui/ConnectedMemeViewer/ConnectedMemeViewer';

interface IAppState{
  memes:Array<IMeme>,
  images:Array<IImage>,
  current:IMeme
}
interface IAppProps{}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state={memes:[], images: [], current:DummyMeme}
  }
  componentDidUpdate(oldProps, oldState) {
     console.log("component update", oldState, this.state)
  }

componentDidMount(){
  /*const memes = fetch(ADR_REST + "/memes").then((flux) => flux.json());
  const img = fetch(ADR_REST + "/images").then((flux) => flux.json());
  Promise.all([memes, img]).then((arr) =>
    this.setState({ memes: arr[0], images: arr[1] })
  );*/
}

  render() {
    return (
      <div className='App'>
        <ConnectedMemeThumbnail/>
        <FlexW>
          <ConnectedMemeViewer/>        
          <ConnectedMemeForm/>
        </FlexW>
      </div>
    );
  }
}

export default App;