import FlexW from './components/layout/FlexW/FlexW';
import ConnectedMemeViewer from './components/ui/ConnectedMemeViewer/ConnectedMemeViewer';
import { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import { ConnectedMemeThumbnail } from './components/ui/MemeThumbnail/MemeThumbnail';
import Navbar from './components/ui/Navbar/Navbar';


const App = () => {
    return (
      <div className='App'>
        <Navbar/>
        <ConnectedMemeThumbnail/>
        <FlexW>
          <ConnectedMemeViewer/>        
          <ConnectedMemeForm/>
        </FlexW>
      </div>
    );
}

export default App;