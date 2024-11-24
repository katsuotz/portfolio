import {createContext, useState, useContext, useEffect, useMemo} from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    theme: 'dark',
  });
  const [isClient, setIsClient] = useState(false);
  const isDarkMode = useMemo(() => globalState.theme === 'dark', [globalState.theme])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getItem('dark-mode');
      if (savedDarkMode !== null) {
        setGlobalState({ theme: savedDarkMode === 'true' ? 'dark' : 'light' });
      } else if (window.matchMedia) {
        setGlobalState({ theme: window.matchMedia('(prefers-color-scheme: dark)').matches === 'true' ? 'dark' : 'light' });
      }
    }
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState, isDarkMode }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);