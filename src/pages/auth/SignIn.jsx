import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { SignInWithGoogle, currentUser } = useAuthContext();

  const handleSignInGoogle = () => {
    SignInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };
  useEffect(() => {
    if (currentUser) navigate("/");
  }, []);

  return (
    <>
      <div className="w-full md:w-2/6 mx-auto p-8 md:p-0 border space-y-8">
        <h1 className="text-center text-4xl font-bold tracking-wider">LOGIN</h1>
        <button
          onClick={handleSignInGoogle}
          type="button"
          aria-label="login button"
          className="w-full p-2 bg-blue-500 text-gray-100 rounded-md font-semibold hover:brightness-90 focus:ring focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign In with Google
        </button>
      </div>
    </>
  );
};

export default SignIn;
