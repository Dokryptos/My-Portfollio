import { Route, Routes} from 'react-router-dom'


import './App.css';

import  { About }  from './Composents/About'
import { Menu } from './Composents/Menu';

const App: React.FC = () => {


  
  return (
    <div>
          <Routes>
            <Route path='/' element={<About/>} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
    </div>
  );
}

export default App;
