import React from 'react';
import FlexW from './components/layout/FlexW/FlexW';
import Button from './components/ui/Button/Button';
import {ADR_REST} from './config/config';
import {MemeSVGViewer} from 'orsys-tjs-meme';
import MemeForm from './components/ui/MemeForm/MemeForm';
import MemeThumbnail from './components/ui/MemeThumbnail/MemeThumbnail';
import { DummyMeme, IImage, IMeme } from './interfaces/common';
//import { DummyMeme } from 'orsys-tjs-meme/dist/interfaces/common';

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
  const memes = fetch(ADR_REST+"/memes").then(flux => flux.json());
  const img = fetch(ADR_REST+"/images").then(flux => flux.json());

  Promise.all([memes, img]).then(arr => this.setState({memes: arr[0], images:arr[1]}));
}

  render() {
    return (
      <div className='App'>
        {/*JSON.stringify(this.state)*/}
        <MemeThumbnail
              memes={this.state.memes}
              images={this.state.images}
        />
        <FlexW>
          <MemeSVGViewer basePath='/images/'
              meme={this.state.current}
              image={this.state.images.find(
                  (e) => e.id === this.state.current.imageId
              )}
          />        

          <MemeForm 
            images={this.state.images}
            meme={this.state.current} 
            onFormChange={(obj:object)=>{ // au lieu d'object on pourrait mettre une interface avec tous les champs modifiable
              this.setState({current: {...this.state.current, ...obj}}); // on vient modifier l'objet courant avec ancienne valeur + new valeur modifée ???
            }}
          />
        </FlexW>

        {/*Valeur du compter : {this.state.counter}
        <hr/>
        <Button onButtonClicked={() => {
          this.setState({counter: this.state.counter+1});
          console.log(this.state.counter);
        }} bgColor="skyblue">Ajouter 1</Button>
        <Button onButtonClicked={() => {
            this.setState({counter: this.state.counter-1});
            console.log(this.state.counter);
        }} bgColor="tomato">Enlever 1</Button>*/}
      </div>
    );
  }
}

export default App;