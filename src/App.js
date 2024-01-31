// import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Auth from './PAGES/Auth';
import Sheet from './PAGES/Sheet';



function App() {
  return (
       <div className='app flex-row-center'>

        <BrowserRouter>

          <Routes>
              <Route path='/auth'  element={  <Auth />} ></Route>
              <Route path='/profile/sheet'  element={  < Sheet />} ></Route>
          </Routes>
        
        </BrowserRouter>
             




       </div>
  );
}

export default App;
