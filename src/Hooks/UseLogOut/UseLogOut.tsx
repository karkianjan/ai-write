import { useNavigate } from 'react-router-dom';

import * as path from 'router/path';
import { logOut } from 'redux-toolkit/features/auth/authSlice';
import { useAppDispatch } from '..';

function useLogout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      dispatch(logOut());
      localStorage.clear(); // clear the local storage
      dispatch(resetState());
      // navigate(0)
      navigate(path.LOGIN);
    } catch (error) {
      console.error(error);
    }
  };

  return { logout };
}

export default useLogout;
