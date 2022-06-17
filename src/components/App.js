import './App.css'
import { Routes, Route } from "react-router-dom";
import AllTestsPage from './pages/AllTestsPage/AllTestsPage';
import Profile from './pages/Profile/Profile';
import SigninPage from "./pages/SigninPage/SigninPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import TestDescription from './pages/TestDescription/TestDescription';
import TestPage from './pages/TestPage/TestPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import TestsByCategories from './pages/AllTestsPage/TestsByCategories';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/tests' element={<AllTestsPage />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/testdescription/:id' element={<TestDescription />} />
        <Route path='/test/:id' element={<TestPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/category/:id' element={<TestsByCategories />} />
      </Routes>
    </div>
  );
}

export default App;
