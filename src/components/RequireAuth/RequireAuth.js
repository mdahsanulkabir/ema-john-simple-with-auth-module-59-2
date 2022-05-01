import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();      // from where the user is now
    
    if(!user){    //if the user in not here (means null) send them somewhere else
        return <Navigate to="/login" state={{from : location}} replace></Navigate> 
    }                         //the user will goto login, that is replace

    return children;
};

export default RequireAuth;