import React, {createContext, useContext, useEffect, useState} from 'react';
export const ContextApp = createContext();
export const useAppContext = () => useContext(ContextApp);
const AppContext = ({children}) => {
  const [players, setPlayers] = useState([]);
  const [gameMode, setGameMode] = useState(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(-1);

  const resetState = () => {
    setPlayers([]);
    setGameMode(null);
    setCurrentPlayerIndex(-1)
  }

  return (
    <ContextApp.Provider
      value={{
        players,
        setPlayers,
        currentPlayerIndex,
        setCurrentPlayerIndex,
        gameMode,
        setGameMode,
        resetState
      }}>
      {children}
    </ContextApp.Provider>
  );
};

export default AppContext;
