import Login from './pages/log';
import { Route , Path, Routes  } from 'react-router';
import LogOut from './pages/logout';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {config} from './component/configAuth/config';
import AuthRoute from './component/configAuth/AuthRoute';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {};
const App:React.FunctionComponent<IApplicationProps> = (props) => {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route element={
          <Login />
      } path='/'/>
      <Route element={
      <AuthRoute>
        <LogOut/>
      </AuthRoute> 
      } path='home'/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
