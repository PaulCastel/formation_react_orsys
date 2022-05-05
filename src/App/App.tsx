import FlexW from './components/layout/FlexW/FlexW';
import ConnectedMemeViewer from './components/ui/ConnectedMemeViewer/ConnectedMemeViewer';
import { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import { ConnectedMemeThumbnail } from './components/ui/MemeThumbnail/MemeThumbnail';


const App = () => {
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

export default App;