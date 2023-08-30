import { useState } from 'react';
import './App.css';
import { LoadingBar } from './Composents/Loading';
import { HomeImg } from './Composents/Home-Img';
import { About } from './Composents/About';

const App: React.FC = () => {

  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  
  const handleLoadingPage = () => {
    setIsLoadingComplete(true);
  }
  
  return (
    <div>
      {isLoadingComplete ? (
          <div>
              <HomeImg />
          </div>
      ) : (
        <LoadingBar duration={20} isComplete={handleLoadingPage} />
      )}

    </div>
  );
}

export default App;
