import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../utils/InitFirebase";
import { Spinner } from "../components";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  //
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  const SignInWithGoogle = async () => await signInWithPopup(auth, provider);

  const SignOut = async () => {
    setCurrentUser();
    return await signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      setIsLoading(false);
    });
    return unSubcribe;
  }, []);
  //
  const value = { currentUser, SignInWithGoogle, SignOut };
  return (
    <AuthContext.Provider value={value}>
      {isLoading ? (
        <div className="flex items-center p-4 space-x-2">
          <div className="w-6 h-6 text-blue-500">
            <Spinner />
          </div>
          <span className="animate-pulse">Loading ..</span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
