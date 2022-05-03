import React from 'react';
import Button from './components/ui/Button/Button';
import {ADR_REST} from './config/config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={counter: 1, memes:[], images: []}
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

        Valeur du compter : {this.state.counter}
        <hr/>
        <Button onButtonClicked={() => {
          this.setState({counter: this.state.counter+1});
          console.log(this.state.counter);
        }} bgColor="skyblue">Ajouter 1</Button>
        <Button onButtonClicked={() => {
            this.setState({counter: this.state.counter-1});
            console.log(this.state.counter);
        }} bgColor="tomato">Enlever 1</Button>
      </div>
    );
  }
}

export default App;