import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react'  
import {Routes, Route, Navigate} from 'react-router'
import HomePage from './pages/Homepage.jsx';
import AuthPage from './pages/AuthPage.jsx';

const App = () => {
  return (
    <header>
      <SignedIn>
        <Routes>
          <Route path = "/" element ={<HomePage/>}/>
          <Route path = "/auth" element={<Navigate to = {"/"} replace />}></Route>
        </Routes>
      </SignedIn>

      <SignedOut>
        <Routes>
          <Route path = "/auth" element = {<AuthPage/>}></Route>
          <Route path = "*" element={<Navigate to = {"/auth"} replace />}></Route>
        </Routes>
      </SignedOut>
      
    </header>
  );
};

export default App;
