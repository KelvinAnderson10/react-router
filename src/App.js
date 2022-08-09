import logo from './logo.svg';
import './App.css';
import { AppRouter } from './AppRouter';
import { Navigation } from './Navigation';
import { AuthProvider } from './services/UseAuth';


function App() {
  return (
    <>
    <AuthProvider>
      <AppRouter></AppRouter>
    </AuthProvider>

    </>
  );
}

export default App;
