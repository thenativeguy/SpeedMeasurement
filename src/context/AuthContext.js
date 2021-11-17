import React, {useState, createContext, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [currentAuth, setCurrentAuth] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const onAuthStateChanged = auth => {
    setCurrentAuth(auth);
    // if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    // console.log('AuthContext currentAuth Changed', currentAuth);
    if (currentAuth) {
      //subscribe to changes in the user's database object
      firestore()
        .collection('users')
        .doc(currentAuth.uid)
        .get()
        .then(documentSnapshot => {
          //check if user active here
          if (documentSnapshot.exists) {
            let user = {
              id: currentAuth.uid,
              ...documentSnapshot.data(),
            };
            setCurrentUser(user);
            if (initializing) setInitializing(false);
          } else {
            setCurrentUser(null);

            if (initializing) setInitializing(false);
          }
        });
    } else {
      setInitializing(false);
      setCurrentUser(null);
    }
  }, [currentAuth, currentUser]);

  // if (initializing) return null;

  return (
    <AuthContext.Provider
      value={{
        currentAuth,
        setCurrentAuth,
        currentUser,
        setCurrentUser,
        setInitializing,
        initializing,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
