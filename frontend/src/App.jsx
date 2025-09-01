import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react'  

const App = () => {
  return (
    <header>
      <SignedOut>
        <SignInButton mode='modal'></SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </header>
  );
};

export default App;
