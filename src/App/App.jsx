import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      {/*<Button text='Du texte' bgColor='aquamarine' color='white'></Button>*/}
      <Button bgColor='grey'>Du text children</Button>
      <Button>
        <div>text node</div>
        </Button>
      <Button 
      onButtonClicked={() => {
        console.log('btn cliqué');
      }} 
      style={{color: 'yellow'}}
      >
        <div>text node 1</div>
        <div>text node 2</div>
      </Button>
      {/*<Button/>*/}
    </div>
  );
}

export default App;
