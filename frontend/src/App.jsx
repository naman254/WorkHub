import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react'  
import {Routes, Route, Navigate} from 'react-router'
import HomePage from './pages/Homepage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import * as Sentry from "@sentry/react";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

const App = () => {
  return (
    <>
      <SignedIn>
        <SentryRoutes>
          <Route path = "/" element ={<HomePage/>}/>
          <Route path = "/auth" element={<Navigate to = {"/"} replace />}></Route>
        </SentryRoutes>
      </SignedIn>

      <SignedOut>
        <SentryRoutes>
          <Route path = "/auth" element = {<AuthPage/>}></Route>
          <Route path = "*" element={<Navigate to = {"/auth"} replace />}></Route>
        </SentryRoutes>
      </SignedOut>
      
    </>
  );
};

export default App;
