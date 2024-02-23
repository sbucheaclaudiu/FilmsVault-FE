export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user.user));
  localStorage.setItem('token', JSON.stringify(user.token))
}

export const deleteUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

export const userIsAuthenticated = () => {
  let storedUser = localStorage.getItem('user');
    if (!storedUser) {
      return false;
    }
    storedUser = JSON.parse(storedUser);

    // if user has token expired, logout user
    if (Date.now() > storedUser.data.exp * 100000) {
      deleteUser();
      return false;
    }
    return true;
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem('token'));
}

export const authHeader = () => {
  const token = getToken();

  if (token) {
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  } 
  else {
    return {};
  }
}


