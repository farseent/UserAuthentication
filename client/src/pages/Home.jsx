import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white uppercase text-3xl gap-4">
      <h4>
        Welcome <span className="text-cyan-500">{username}</span>
      </h4>
      <button
        onClick={Logout}
        className="bg-teal-800 text-white cursor-pointer px-8 py-4 text-2xl rounded-full transition duration-300 hover:bg-cyan-500"
      >
        LOGOUT
      </button>
      <ToastContainer />
    </div>
    </>
  );
};

export default Home;