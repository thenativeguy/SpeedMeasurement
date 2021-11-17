import React, {createContext, useContext, useEffect, useState} from 'react';
export const ContextApp = createContext();
export const useAppContext = () => useContext(ContextApp);
const AppContext = ({children}) => {
  const [players, setPlayers] = useState([]);
  const [gameMode, setGameMode] = useState(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(-1);
    
  const values = {};
  return <ContextApp.Provider value={{
      players, setPlayers
  }}>{children}</ContextApp.Provider>;
};

export default AppContext;
