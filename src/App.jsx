import { useEffect, useState } from 'react';
import Sidebar from './components/Siderbar/Sidebar';
import Wrapper from './pages/Wrapper/Wrapper';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Company from './pages/Company/Company';
import User from './pages/User/User';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [mediaQuery, setMediaQuery] = useState(
    window.innerWidth < 600 ? false : true
  );
  const [showMenu, setShowMenu] = useState(false);
  console.log(accessToken);
  const menuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function handleResize(e) {
      if (e.srcElement.outerWidth > 600) {
        setMediaQuery(true);
      } else {
        setMediaQuery(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        {mediaQuery ? (
          <Sidebar />
        ) : (
          <button className='float-menu' onClick={menuClick}>
            <MenuRoundedIcon />
          </button>
        )}
        {showMenu && <Sidebar />}
        <Routes>
          <Route
            path='/'
            element={
              <Wrapper
                accessToken={accessToken}
                setAccessToken={setAccessToken}
              />
            }
          >
            <Route
              path='perusahaan/mitramas-infosys-global'
              element={<Company />}
            />
            <Route path='user' element={<User accessToken={accessToken} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
