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
      if (jwtToken) {
        return {
          jwtToken,
          user: JSON.parse(user),
          isAuthenticated: true,
        };
      }
    } catch (error) {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
    }
    return {
      jwtToken: null,
      user: null,
      isAuthenticated: false,
    };
  })();

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  // User api calls:

  // Login
  const login = async (credentials) => {
    try {
      const response = await api.post("/api/auth/login", credentials);
      const token = response.data.jwtToken;
      const user = {
        username: credentials.username,
      };

      localStorage.setItem("jwtToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          jwtToken: token,
          user,
        },
      });
    } catch (err) {
      throw err;
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT });
  };

  // Register
  const registerUser = async (userData) => {
    try {
      await api.post("/api/auth/register", userData);
    } catch (err) {
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
