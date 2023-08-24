import { useState } from 'react';
import './App.css';
import { LoadingBar } from './Composents/Loading';

const App: React.FC = () => {

  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  
  const handleLoadingPage = () => {
    setIsLoadingComplete(true);
  }
  
  return (
    <div>
      {isLoadingComplete ? (
          <div>
              
          </div>
      ) : (
        <LoadingBar duration={20} isComplete={handleLoadingPage} />
      )}

    </div>
  );
}

export default App;
