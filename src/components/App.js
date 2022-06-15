import './App.css'
import { Routes, Route } from "react-router-dom";
import AllTestsPage from './pages/AllTestsPage/AllTestsPage';
import Profile from './pages/Profile/Profile';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import TestDescription from './pages/TestDescription/TestDescription';
import TestPage from './pages/TestPage/TestPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<AllTestsPage />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/sugnup' element={<SignupPage />} />
        <Route path='/testDescription' element={<TestDescription />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
