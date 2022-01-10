import {} from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  const { currentUser, SignOut } = useAuthContext();

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="flex justify-between items-center border p-4 m-4">
      <div>{currentUser.displayName || "No Name"}</div>
      <button
        onClick={handleSignOut}
        type="button"
        className="flex items-center space-x-2 px-4 py-2 rounded-md bg-red-500 text-gray-100 font-semibold"
      >
        <HiOutlineLogout />
        <span className="border-l pl-2"> Logout</span>
      </button>
    </div>
  );
};

export default Header;
