import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button,  } from "react-bootstrap";
import { signInSuccess } from '../redux/userSlice';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        const result = await signInWithPopup(auth, provider);
                
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        });
        const data = await res.json();
        console.log(data);
        dispatch(signInSuccess(data));
        navigate('/');
       
    } catch (error) {
        console.log('connexion avec google impossible', error);
    }
  };

  return (
    <Button
      type='button'
      variant="outline-dark"
      onClick={handleGoogleClick}
      className='w-100 d-flex align-items-center justify-content-center gap-2'
    >
    <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            height="25"
            width="25"
          />
      Continue with google
    </Button>
  );
}