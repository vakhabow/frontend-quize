import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import AllTestsPage from './pages/AllTestsPage/AllTestsPage';
import Profile from './pages/Profile/Profile';
import SigninPage from "./pages/SigninPage/SigninPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import TestDescription from './pages/TestDescription/TestDescription';
import TestPage from './pages/TestPage/TestPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import TestsByCategories from './pages/AllTestsPage/TestsByCategories';
import { useSelector } from 'react-redux';
import Favorites from './pages/Profile/Favorites';
import Edit from './pages/Profile/Edit';

function App() {

  const token = useSelector(state => state.auth.token)

  return (
    <div className="app">
      <Routes>
        <Route path='/tests' element={<AllTestsPage />} />
        <Route path='/profile' element={<Profile />}>
          <Route path='favorites' element={<Favorites />}/>
          <Route path='completed' element={<div>Hello</div>}/>
          <Route path='edit' element={<Edit />}/>
        </Route>
        <Route path='/signin' element={token ? <Navigate to="/tests"/> : <SigninPage />} />
        <Route path='/signup' element={token ? <Navigate to="/tests"/> : <SignupPage />} />
        <Route path='/testdescription/:id' element={<TestDescription />} />
        <Route path='/test/:id' element={<TestPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/category/:id' element={<TestsByCategories />} />
      </Routes>
    </div>
  );
}

export default App;
