import { createContext, useContext, useEffect, useReducer } from "react";
import api from "../api/AxiosConfig";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const authReducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        jwtToken: action.payload.jwtToken,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...prevState,
        jwtToken: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return prevState;
  }
};

export const AuthProvider = ({ children }) => {
  const initialAuthState = (() => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const user = localStorage.getItem("user");
      if (jwtToken && user) {
        return {
          jwtToken,
          user: JSON.parse(user),
          isAuthenticated: true,
        };
      }
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
    return {
      jwtToken: null,
      user: null,
      isAuthenticated: false,
    };
  })();

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    try {
      if (authState.isAuthenticated) {
        localStorage.setItem("jwtToken", authState.jwtToken);
        localStorage.setItem("user", JSON.stringify(authState.user));
      } else {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Failed to save to localStorage", error);
    }
  }, [authState]);

  // User api calls:

  // Login
  const login = async (credentials) => {
    try {
      const response = await api.post("/api/auth/login", credentials);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          jwtToken: response.data.token,
          user: { username: credentials.username },
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  // Register
  const registerUser = async (userData) => {
    try {
      await api.post("/api/auth/register", userData);
    } catch (err) {
      console.log(err.response);
      throw err;
    }
  };

  // Components wrapped with AuthProvider have direct access to user
  return (
    <AuthContext.Provider
      value={{
        login,
        registerUser,
        jwtToken: authState.jwtToken,
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
