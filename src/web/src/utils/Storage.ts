// return the user data from the local storage
export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  if (userId) return userId;
  else return null;
};

// return the token from the local storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

// remove the token and user from the local storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
};

// set the token and user from the local storage
export const setUserSession = (token: string, userId: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
};

export const setUserData = (userData: any) => {
  localStorage.setItem("user", JSON.stringify(userData));
};
export const getUserData = () => {
  const data = localStorage.getItem("user");
  if (data) {
    return JSON.parse(data);
  } else {
    return undefined;
  }
};

export const isUserSessions = () => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  if (userId && token) {
    return true;
  } else {
    return false;
  }
};
