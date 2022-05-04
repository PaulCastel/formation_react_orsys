import React from 'react';
import FlexW from './components/layout/FlexW/FlexW';
import Button from './components/ui/Button/Button';
import {ADR_REST} from './config/config';
import {MemeSVGViewer} from 'orsys-tjs-meme';
import MemeForm from './components/ui/MemeForm/MemeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={memes:[], images: []}
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
        {JSON.stringify(this.state)}
        <FlexW>
          { /* && ternaire react, si le premier est vrai, alors... pas de sinon
              on fait une protection car le même est obligatoire sinon erreur */ }
          {this.state.memes.length && (
            <MemeSVGViewer basePath='/images/'
              meme={this.state.memes[0]}
              image={this.state.images.find(
                  (e) => e.id === this.state.memes[0].imageId
              )}
            />
          )}
          <MemeForm images={this.state.images}/>
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