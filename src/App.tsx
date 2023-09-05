import { Route, Routes, useLocation} from 'react-router-dom'


import './App.css';

import  Home  from './Page/Home'
import  { Menu }  from './Page/Menu';
import  About  from './Page/About'
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
let location = useLocation();
  

  return (
    <div> 
        
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </AnimatePresence>

    </div>
  );
}

export default App;
