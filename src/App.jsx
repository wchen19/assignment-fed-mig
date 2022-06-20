import { useEffect, useState } from 'react';
import Sidebar from './components/Siderbar/Sidebar';
import Wrapper from './pages/Wrapper/Wrapper';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './App.scss';

function App() {
  const [mediaQuery, setMediaQuery] = useState(
    window.innerWidth < 600 ? false : true
  );
  const [showMenu, setShowMenu] = useState(false);

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
      {mediaQuery ? (
        <Sidebar />
      ) : (
        <button className='float-menu' onClick={menuClick}>
          <MenuRoundedIcon />
        </button>
      )}
      {showMenu && <Sidebar />}

      <Wrapper />
    </div>
  );
}

export default App;
