import { Route, Routes} from 'react-router-dom'


import { useState } from 'react';
import './App.css';
import { LoadingBar } from './Composents/Loading';
import  { About }  from './Composents/About'
import { Menu } from './Composents/Menu';

const App: React.FC = () => {

  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  
  const handleLoadingPage = () => {
    setIsLoadingComplete(true);
  }
  
  return (
    <div>
      {isLoadingComplete ? (

          <Routes>
            <Route path='/' element={<About/>} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
      ) : (
        <LoadingBar duration={20} isComplete={handleLoadingPage} />
      )}

    </div>
  );
}

export default App;
