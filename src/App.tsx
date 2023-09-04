import { Route, Routes, useLocation} from 'react-router-dom'


import './App.css';

import  About  from './Composents/About'
import  Menu  from './Composents/Menu';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
let location = useLocation();
  

  return (
    <div> 
        
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<About/>} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </AnimatePresence>

    </div>
  );
}

export default App;
