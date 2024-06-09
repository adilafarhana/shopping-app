import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser';
import SearchUser from './component/SearchUser';
import { DeleteUser } from './component/DeleteUser';
import ViewAll from './component/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddUser/>}/>
      <Route path='/search'element={<SearchUser/>}/>
      <Route path='/delete'element={<DeleteUser/>}/>
      <Route path='/viewAll'element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
