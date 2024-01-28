import logo from './logo.svg';
import Form from './Form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './AddInForm/Add';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/addDetails' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
